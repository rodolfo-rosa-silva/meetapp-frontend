/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import history from '../routes/history';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);
middlewares.push(routerMiddleware(history));

const createEnhancer = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : null;

const store = createStore(
  connectRouter(history)(reducers),
  compose(
    createEnhancer(),
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(sagas);

export default store;
