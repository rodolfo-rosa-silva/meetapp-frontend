import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/Header';
import { Creators as ProfileActions } from '../../store/ducks/profile';

import {
  Container, Form, ContainerLoad, TitlePreferences, MessageError,
} from './styles';
import {
  Label, Input, Button, ListPreferences, NamePreference, Message,
} from '../../styles/forms';

import Checkbox from '../../components/Checkbox';
import Loading from '../../components/Loading';

class Profile extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    messageErrorLoading: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      email: PropTypes.string,
      password: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
      first_login: PropTypes.number,
    }).isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    userPreferences: PropTypes.array.isRequired,
    preferences: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ).isRequired,
    profileLoad: PropTypes.func.isRequired,
    profileSaveRequest: PropTypes.func.isRequired,
    loadingSave: PropTypes.bool.isRequired,
    messageSave: PropTypes.string.isRequired,
  };

  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
    userPreferences: [],
  };

  /**
   * este metodo serve para repassar o estado apos os dados virem da api,
   * porem quando ele e utilizado, o metodo this.setState simplesmente para
   * de funcionar.
   */

  // static getDerivedStateFromProps(props) {
  //   const { user, userPreferences } = props;

  //   return { username: user.username, userPreferences };
  // }

  componentDidMount() {
    const { profileLoad } = this.props;

    profileLoad();

    /**
     * Total gambiarra para setar os dados, gostaria de saber qual a forma
     * correta para guardar esses dados apos a request na api
     */
    setTimeout(() => {
      const { user, userPreferences } = this.props;
      this.setState({ username: user.username, userPreferences });
    }, 1000);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      username, password, passwordConfirmation, userPreferences,
    } = this.state;

    const { profileSaveRequest, loadingSave } = this.props;

    if (!loadingSave) {
      profileSaveRequest({
        username,
        password,
        passwordConfirmation,
        preferences: userPreferences,
      });
    }
  };

  handleCheckboxChange = async (event) => {
    const { userPreferences } = this.state;
    // Id da preferencia que vem do checkbox clicado
    const currentId = parseInt(event.target.value, 10);

    let currentPreferences = userPreferences;

    /**
     * Tenho certeza que existe um maneira fazer isso de uma forma menos verbosa
     * Infelizmente so consegui chegar no resultado desejado assim
     * Gostaria de uma observacao aqui para ver como fazer isso de outra forma
     */
    userPreferences.forEach((id) => {
      if (id !== currentId) {
        if (!currentPreferences.includes(currentId)) currentPreferences.push(currentId);
      } else {
        currentPreferences = currentPreferences.filter(idLocal => idLocal !== currentId);
      }
    });

    this.setState({ userPreferences: currentPreferences });
  };

  render() {
    const {
      loading,
      messageErrorLoading,
      user,
      preferences,
      loadingSave,
      messageSave,
    } = this.props;

    const { userPreferences, username, loadFromApi } = this.state;

    return (
      <Fragment>
        <Header />
        <Container>
          <Form onSubmit={this.handleSubmit}>
            {loading && (
              <ContainerLoad>
                <Loading />
              </ContainerLoad>
            )}
            {messageErrorLoading && <MessageError>{messageErrorLoading}</MessageError>}
            {user.id && preferences.length > 0 && (
              <Fragment>
                <Label>Nome</Label>
                <Input
                  type="text"
                  value={username}
                  placeholder="Digite seu nome"
                  onChange={e => this.setState({ username: e.target.value })}
                />
                <Label>Senha</Label>
                <Input
                  type="password"
                  placeholder="Sua senha secreta"
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <Label>Confirmação de senha</Label>
                <Input
                  type="password"
                  placeholder="Sua senha secreta"
                  onChange={e => this.setState({ passwordConfirmation: e.target.value })}
                />
                <TitlePreferences>Preferências</TitlePreferences>
                <ListPreferences>
                  {preferences.map(preference => (
                    <li key={preference.id}>
                      <Checkbox
                        value={preference.id}
                        onChange={this.handleCheckboxChange}
                        checked={userPreferences.includes(preference.id)}
                      />
                      <NamePreference>{preference.name}</NamePreference>
                    </li>
                  ))}
                </ListPreferences>
                {messageSave && <Message>{messageSave}</Message>}
                <Button type="submit">{loadingSave ? 'Enviando...' : 'Salvar'}</Button>
              </Fragment>
            )}
          </Form>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.profile.loading,
  messageErrorLoading: state.profile.messageErrorLoading,
  user: state.profile.user,
  userPreferences: state.profile.userPreferences,
  preferences: state.profile.preferences,
  loadingSave: state.profile.loadingSave,
  messageSave: state.profile.messageSave,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProfileActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
