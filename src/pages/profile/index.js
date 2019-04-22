import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/Header';
import { Creators as ProfileActions } from '../../store/ducks/profile';

import {
  Container, Form, ContainerLoad, TitlePreferences,
} from './styles';
import {
  Label, Input, Button, Message, ListPreferences, NamePreference,
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
  };

  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
    preferences: [],
  };

  componentDidMount() {
    const { profileLoad } = this.props;

    profileLoad();
  }

  render() {
    const {
      loading, messageErrorLoading, user, userPreferences, preferences,
    } = this.props;

    return (
      <Fragment>
        <Header />
        <Container>
          <Form>
            {loading && (
              <ContainerLoad>
                <Loading />
              </ContainerLoad>
            )}
            {user.id && preferences.length > 0 && (
              <Fragment>
                <Label>Nome</Label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Digite seu nome"
                  onChange={e => this.setState({ username: e.target.value })}
                />
                <Label>Senha</Label>
                <Input
                  type="text"
                  name="password"
                  placeholder="Sua senha secreta"
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <Label>Confirmação de senha</Label>
                <Input
                  type="text"
                  name="password"
                  placeholder="Sua senha secreta"
                  onChange={e => this.setState({ passwordConfirmation: e.target.value })}
                />
                <TitlePreferences>Preferências</TitlePreferences>
                <ListPreferences>
                  {preferences.map(preference => (
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
                <Button type="submit">Salvar</Button>
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
});

const mapDispatchToProps = dispatch => bindActionCreators(ProfileActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
