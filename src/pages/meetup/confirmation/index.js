/* eslint-disable no-underscore-dangle */
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MeetupConfirmationActions } from '../../../store/ducks/meetupConfirmation';

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
  SuccessConfirmation,
} from './styles';

import Header from '../../../components/Header';

import Loading from '../../../components/Loading';

class MeetupConfirmation extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
    messageError: PropTypes.string.isRequired,
    messageSuccess: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    meetupConfirmationLoad: PropTypes.func.isRequired,
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
    }).isRequired,
  };

  componentDidMount() {
    const { meetupConfirmationLoad } = this.props;
    const { match } = this.props;

    meetupConfirmationLoad(match.params.id);
  }

  render() {
    const {
      messageError, messageSuccess, loading, meetup,
    } = this.props;

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
            {meetup.id && (
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
                    <Form onSubmit={this.handleSubscription}>
                      <SuccessConfirmation>{messageSuccess}</SuccessConfirmation>
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
  messageError: state.meetupConfirmation.messageError,
  messageSuccess: state.meetupConfirmation.messageSuccess,
  loading: state.meetupConfirmation.loading,
  meetup: state.meetupConfirmation.meetup,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupConfirmationActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeetupConfirmation);
