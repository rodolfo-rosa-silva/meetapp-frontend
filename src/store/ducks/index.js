import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../routes/history';

import signin from './signin';
import signup from './signup';
import preferences from './preferences';

export default combineReducers({
  router: connectRouter(history),
  signin,
  signup,
  preferences,
});
