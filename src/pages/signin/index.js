import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SigninActions } from '../../store/ducks/signin';

import logo from '../../assets/images/logo.svg';

import { Container, Form, Logo } from './styles';
import {
  Label, Input, Button, Link,
} from '../../styles/forms';

class Signin extends Component {
  static propTypes = {
    signinUserAction: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    const { signinUserAction } = this.props;

    signinUserAction({ email, password });
  };

  render() {
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
          <Button type="submit">Entrar</Button>
          <Link to="/signup">Criar conta grátis</Link>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(SigninActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signin);
