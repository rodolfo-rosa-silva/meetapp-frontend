import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as SigninActions } from '../ducks/signin';

export function* sendDataSignin(action) {
  try {
    console.tron.log(action.payload.data);
    const response = yield call(api.post, '/signin', action.payload.data);
    console.tron.log(response);

    yield put(SigninActions.signinUserAction(response));
  } catch (err) {
    console.tron.log(err);
  }
}
