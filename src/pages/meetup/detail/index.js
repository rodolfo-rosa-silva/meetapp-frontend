/* eslint-disable no-underscore-dangle */
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MeetupDetailActions } from '../../../store/ducks/meetupDetail';

import { Button } from '../../../styles/forms';

import {
  Container,
  Grid,
  ContainerLoad,
  MessageError,
  Banner,
  ContainerContent,
  Content,
  Title,
  Subscriptions,
  Description,
  LabelLocation,
  Location,
  Form,
  AlreadySubscription,
} from './styles';

import Header from '../../../components/Header';

import Loading from '../../../components/Loading';

class MeetupDetail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
    messageError: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    meetupLoad: PropTypes.func.isRequired,
    data: PropTypes.shape({
      meetup: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.string,
        datetime: PropTypes.string,
        file_id: PropTypes.number,
        file: PropTypes.shape({
          id: PropTypes.number,
          file: PropTypes.string,
          name: PropTypes.string,
          type: PropTypes.string,
          subtype: PropTypes.string,
          created_at: PropTypes.string,
          updated_at: PropTypes.string,
          url: PropTypes.string,
        }),
        __meta__: PropTypes.shape({
          subscriptions_count: PropTypes.number,
        }),
      }),
      subscrition: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { meetupLoad } = this.props;
    const { match } = this.props;

    meetupLoad(match.params.id);
  }

  render() {
    const { messageError, loading, data } = this.props;
    const { meetup, subscrition } = data;

    return (
      <Fragment>
        <Header />
        <Container>
          <Grid>
            {loading && (
              <ContainerLoad>
                <Loading />
              </ContainerLoad>
            )}
            {messageError && <MessageError>{messageError}</MessageError>}
            {meetup && (
              <Fragment>
                <Banner src={meetup.file.url} alt={meetup.title} />
                <ContainerContent>
                  <Content>
                    <Title>{meetup.title}</Title>
                    <Subscriptions>
                      {meetup.__meta__.subscriptions_count}
                      {' '}
membros
                    </Subscriptions>
                    <Description>{meetup.description}</Description>
                    <LabelLocation>Realizado em:</LabelLocation>
                    <Location>{meetup.location}</Location>
                    <Form>
                      {subscrition ? (
                        <AlreadySubscription>
                          Você já está inscrito neste meetup
                        </AlreadySubscription>
                      ) : (
                        <Button>Inscreva-se</Button>
                      )}
                    </Form>
                  </Content>
                </ContainerContent>
              </Fragment>
            )}
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  messageError: state.meetupDetail.messageError,
  loading: state.meetupDetail.loading,
  data: state.meetupDetail.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupDetailActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeetupDetail);
