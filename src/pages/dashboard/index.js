/* eslint-disable no-underscore-dangle */
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DashboardActions } from '../../store/ducks/dashboard';

import Header from '../../components/Header';

import search from '../../assets/images/search.svg';
import arrowRight from '../../assets/images/arrow-right.svg';

import Loading from '../../components/Loading';

import {
  Container,
  Grid,
  BoxFilter,
  Input,
  RowMeetups,
  ContentRow,
  CardMeetup,
  BackgroundMeetup,
  BoxInfos,
  Infos,
  Title,
  Subscriptions,
  ButtonLink,
  BoxLoading,
  MessageErrorLoad,
} from './styles';

class Dashboard extends Component {
  state = {
    filter: '',
  };

  static propTypes = {
    messageError: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    dashboardLoad: PropTypes.func.isRequired,
    meetups: PropTypes.shape({
      nextMeetups: PropTypes.arrayOf(
        PropTypes.shape({
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
      ),
      subscriptions: PropTypes.arrayOf(
        PropTypes.shape({
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
      ),
      nextRecommended: PropTypes.arrayOf(
        PropTypes.shape({
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
      ),
    }).isRequired,
  };

  componentDidMount() {
    const { dashboardLoad } = this.props;
    const { filter } = this.state;

    dashboardLoad(filter);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { dashboardLoad, loading } = this.props;
    const { filter } = this.state;

    if (!loading) dashboardLoad(filter);
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { messageError, loading, meetups } = this.props;

    return (
      <Fragment>
        <Header />
        <Container>
          <Grid>
            <BoxFilter onSubmit={this.handleSubmit}>
              <img src={search} alt="search" />
              <Input type="text" placeholder="Buscar meetups" onChange={this.handleFilterChange} />
            </BoxFilter>
            <RowMeetups>
              <h2>Inscrições</h2>
              {loading && (
                <BoxLoading>
                  <Loading />
                </BoxLoading>
              )}
              {messageError.length > 0 ? <MessageErrorLoad>{messageError}</MessageErrorLoad> : ''}
              {meetups.subscriptions && (
                <ContentRow>
                  {meetups.subscriptions.map(meetup => (
                    <CardMeetup>
                      <Link to={`/meetup/${meetup.id}`} key={meetup.id}>
                        <BackgroundMeetup src={meetup.file.url} />
                        <BoxInfos>
                          <Infos>
                            <Title title={meetup.title}>{meetup.title}</Title>
                            <Subscriptions>
                              {meetup.__meta__.subscriptions_count}
                              {' '}
membros
                            </Subscriptions>
                          </Infos>
                          <ButtonLink>
                            <img src={arrowRight} alt="Link" />
                          </ButtonLink>
                        </BoxInfos>
                      </Link>
                    </CardMeetup>
                  ))}
                </ContentRow>
              )}
            </RowMeetups>
            <RowMeetups>
              <h2>Próximos meetups</h2>
              {loading && (
                <BoxLoading>
                  <Loading />
                </BoxLoading>
              )}
              {messageError.length > 0 ? <MessageErrorLoad>{messageError}</MessageErrorLoad> : ''}
              {meetups.nextMeetups && (
                <ContentRow>
                  {meetups.nextMeetups.map(meetup => (
                    <CardMeetup>
                      <Link to={`/meetup/${meetup.id}`} key={meetup.id}>
                        <BackgroundMeetup src={meetup.file.url} />
                        <BoxInfos>
                          <Infos>
                            <Title title={meetup.title}>{meetup.title}</Title>
                            <Subscriptions>
                              {meetup.__meta__.subscriptions_count}
                              {' '}
membros
                            </Subscriptions>
                          </Infos>
                          <ButtonLink>
                            <img src={arrowRight} alt="Link" />
                          </ButtonLink>
                        </BoxInfos>
                      </Link>
                    </CardMeetup>
                  ))}
                </ContentRow>
              )}
            </RowMeetups>
            <RowMeetups>
              <h2>Recomendados</h2>
              {loading && (
                <BoxLoading>
                  <Loading />
                </BoxLoading>
              )}
              {messageError.length > 0 ? <MessageErrorLoad>{messageError}</MessageErrorLoad> : ''}
              {meetups.nextRecommended && (
                <ContentRow>
                  {meetups.nextRecommended.map(meetup => (
                    <CardMeetup>
                      <Link to={`/meetup/${meetup.id}`} key={meetup.id}>
                        <BackgroundMeetup src={meetup.file.url} />
                        <BoxInfos>
                          <Infos>
                            <Title title={meetup.title}>{meetup.title}</Title>
                            <Subscriptions>
                              {meetup.__meta__.subscriptions_count}
                              {' '}
membros
                            </Subscriptions>
                          </Infos>
                          <ButtonLink>
                            <img src={arrowRight} alt="Link" />
                          </ButtonLink>
                        </BoxInfos>
                      </Link>
                    </CardMeetup>
                  ))}
                </ContentRow>
              )}
            </RowMeetups>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  messageError: state.dashboard.messageError,
  loading: state.dashboard.loading,
  meetups: state.dashboard.meetups,
});

const mapDispatchToProps = dispatch => bindActionCreators(DashboardActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
