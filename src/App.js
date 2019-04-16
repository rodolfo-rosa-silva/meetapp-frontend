import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';

import Routes from './routes';
import store from './store';

import GlobalStyle from './styles/global';
import { Container } from './styles/components';

const App = () => (
  <Provider store={store}>
    <Container>
      <GlobalStyle />
      <Routes />
    </Container>
  </Provider>
);

export default App;
