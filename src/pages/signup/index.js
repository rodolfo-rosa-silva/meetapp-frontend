import React, { Component } from 'react';

import logo from '../../assets/images/logo.svg';

import { Container, Form, Logo } from './styles';
import {
  Label, Input, Button, Link,
} from '../../styles/forms';

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      username, email, password, password_confirmation,
    } = this.state;
  };

  render() {
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
          <Label>Confirme sua senha</Label>
          <Input
            type="password"
            name="password_confirmation"
            placeholder="Confirme sua senha secreta"
            onChange={e => this.setState({ password_confirmation: e.target.value })}
          />
          <Button type="submit">Entrar</Button>
          <Link to="/sigin">Já tenho conta</Link>
        </Form>
      </Container>
    );
  }
}

export default Signup;
