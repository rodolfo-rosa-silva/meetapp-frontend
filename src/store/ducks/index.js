import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../routes/history';

import signin from './signin';

export default combineReducers({
  router: connectRouter(history),
  signin,
});
