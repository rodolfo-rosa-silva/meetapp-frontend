import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PreferencesActions } from '../../store/ducks/preferences';

import {
  Container, Form, HelloUser, IntroText, TitlePreferences, BoxLoading,
} from './styles';
import {
  Button, Message, ListPreferences, NamePreference,
} from '../../styles/forms';

import Checkbox from '../../components/Checkbox';
import Loading from '../../components/Loading';

class Preferences extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    listPreferences: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ).isRequired,
    messageErrorLoad: PropTypes.string.isRequired,
    loadingData: PropTypes.bool.isRequired,
    loadingForm: PropTypes.bool.isRequired,
    preferencesLoad: PropTypes.func.isRequired,
    preferencesRequest: PropTypes.func.isRequired,
  };

  state = {
    preferencesSelected: [],
    username: localStorage.getItem('@meetapp:username'),
  };

  componentDidMount() {
    const { preferencesLoad } = this.props;

    preferencesLoad();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { preferencesRequest, loadingForm } = this.props;
    const { preferencesSelected } = this.state;

    if (!loadingForm && preferencesSelected.length > 0) preferencesRequest(preferencesSelected);
  };

  handleCheckboxChange = (event) => {
    const { preferencesSelected } = this.state;
    const preferences = [...preferencesSelected, event.target.value];

    this.setState({ preferencesSelected: preferences });
  };

  render() {
    const {
      message, messageErrorLoad, loadingData, listPreferences,
    } = this.props;
    const { username } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <HelloUser>
            Olá,
            {` ${username}`}
          </HelloUser>
          <IntroText>
            Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
            selecionarmos os melhores meetups pra você:
          </IntroText>

          <TitlePreferences>Preferências</TitlePreferences>
          {loadingData && (
            <BoxLoading>
              <Loading />
            </BoxLoading>
          )}
          {messageErrorLoad && <Message>{messageErrorLoad}</Message>}
          {listPreferences && (
            <ListPreferences>
              {listPreferences.map(preference => (
                <li key={preference.id}>
                  <Checkbox
                    name="preferences[]"
                    value={preference.id}
                    onChange={this.handleCheckboxChange}
                  />
                  <NamePreference>{preference.name}</NamePreference>
                </li>
              ))}
            </ListPreferences>
          )}
          {message.length > 0 ? <Message>{message}</Message> : ''}
          <Button type="submit">Continuar</Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  listPreferences: state.preferences.listPreferences,
  message: state.preferences.message,
  messageErrorLoad: state.preferences.messageErrorLoad,
  loadingData: state.preferences.loadingData,
  loadingForm: state.preferences.loadingForm,
});

const mapDispatchToProps = dispatch => bindActionCreators(PreferencesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Preferences);
