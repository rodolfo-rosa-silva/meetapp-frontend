import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SigninActions } from '../../store/ducks/signin';

import logo from '../../assets/images/logo.svg';

import { Container, Form, Logo } from './styles';
import {
  Label, Input, Button, Link, Message,
} from '../../styles/forms';

class Signin extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    signinRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { signinRequest, loading } = this.props;
    const { email, password } = this.state;

    if (!loading) signinRequest({ email, password });
  };

  render() {
    const { message } = this.props;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Logo src={logo} alt="Logotipo" />
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
          <Button type="submit">Entrar</Button>
          <Link to="/signup">Criar conta grátis</Link>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  message: state.signin.message,
  error: state.signin.loading,
  loading: state.signin.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(SigninActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
