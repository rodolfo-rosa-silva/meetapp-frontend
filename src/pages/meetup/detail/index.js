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
  ErrorSubscription,
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
    subscriptionLoad: PropTypes.func.isRequired,
    messageSubscritionError: PropTypes.string.isRequired,
    loadingSubscription: PropTypes.bool.isRequired,
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
    subscription: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { meetupLoad } = this.props;
    const { match } = this.props;

    meetupLoad(match.params.id);
  }

  handleSubscription = (event) => {
    event.preventDefault();

    const { subscriptionLoad, match, loadingSubscription } = this.props;

    if (!loadingSubscription) subscriptionLoad(match.params.id);
  };

  render() {
    const {
      messageError,
      loading,
      meetup,
      subscription,
      loadingSubscription,
      messageSubscritionError,
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
                      {messageSubscritionError && (
                        <ErrorSubscription>{messageSubscritionError}</ErrorSubscription>
                      )}
                      {subscription ? (
                        <AlreadySubscription>Você está inscrito neste meetup</AlreadySubscription>
                      ) : (
                        <Button>{loadingSubscription ? 'Enviando...' : 'Inscreva-se'}</Button>
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
  meetup: state.meetupDetail.meetup,
  subscription: state.meetupDetail.subscription,
  messageSubscritionError: state.meetupDetail.messageSubscritionError,
  loadingSubscription: state.meetupDetail.loadingSubscription,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupDetailActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MeetupDetail);
