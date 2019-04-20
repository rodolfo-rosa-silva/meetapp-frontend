import React from 'react';
import { Link } from 'react-router-dom';

import logoWhite from '../../assets/images/logo-white.svg';
import user from '../../assets/images/user.svg';

import { Container, Nav, BoxLinkProfile } from './styles';

const Header = () => (
  <Container>
    <Nav>
      <li>
        <img src={logoWhite} alt="Meetapp" />
      </li>
      <li>
        <Link to="/dashboard">Início</Link>
      </li>
      <li>
        <Link to="/new-meetup">Novo meetup</Link>
      </li>
    </Nav>
    <BoxLinkProfile>
      <Link to="/profile">
        <img src={user} alt="Profile" />
      </Link>
    </BoxLinkProfile>
  </Container>
);

export default Header;
