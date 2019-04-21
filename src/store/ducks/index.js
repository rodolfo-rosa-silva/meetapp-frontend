import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../routes/history';

import signin from './signin';
import signup from './signup';
import preferences from './preferences';
import dashboard from './dashboard';
import meetupDetail from './meetupDetail';

export default combineReducers({
  router: connectRouter(history),
  signin,
  signup,
  preferences,
  dashboard,
  meetupDetail,
});
