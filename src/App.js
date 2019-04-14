import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';

import { createGlobalStyle } from 'styled-components';

import { Container } from './styles/components';

import Routes from './routes';
import store from './store';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #26202c;
    font-family: 'Helvetica', sans-serif;
    color: #FFF;
  }
  button {
    cursor: pointer;
  }
`;

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Container>
        <GlobalStyle />
        <Routes />
      </Container>
    </BrowserRouter>
  </Provider>
);

export default App;
