import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SignupActions } from '../../store/ducks/signup';

import logo from '../../assets/images/logo.svg';

import { Container, Form, Logo } from './styles';
import {
  Label, Input, Button, Message, ContainerLink,
} from '../../styles/forms';

class Signup extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    signupRequest: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    email: '',
    password: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { signupRequest, loading } = this.props;
    const { username, email, password } = this.state;

    if (!loading) {
      signupRequest({
        username,
        email,
        password,
      });
    }
  };

  render() {
    const { message } = this.props;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Logo src={logo} alt="Logotipo" />
          <Label>Nome</Label>
          <Input
            type="text"
            name="username"
            placeholder="Digite seu nome"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Label>Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="Sua senha secreta"
            onChange={e => this.setState({ password: e.target.value })}
          />
          {message.length > 0 ? <Message>{message}</Message> : ''}
          <Button type="submit">Criar conta</Button>
          <ContainerLink>
            <Link to="/signin">Já tenho conta</Link>
          </ContainerLink>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  message: state.signup.message,
  loading: state.signup.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(SignupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
