import React from 'react';
import logo from '../../assets/images/logo.svg';

import { Container, Form, Logo } from './styles';
import {
  Label, Input, Button, Link,
} from '../../styles/forms';

const Signin = () => (
  <Container>
    <Form>
      <Logo src={logo} alt="Logotipo" />
      <Label>Email</Label>
      <Input type="text" name="email" placeholder="Digite seu e-mail" />
      <Label>Senha</Label>
      <Input type="password" name="password" placeholder="Sua senha secreta" />
      <Button type="submit">Entrar</Button>
      <Link to="/signup">Criar conta grátis</Link>
    </Form>
  </Container>
);

export default Signin;
