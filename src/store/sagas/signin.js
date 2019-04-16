import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as SigninActions } from '../ducks/signin';

export function* signin(action) {
  try {
    const response = yield call(api.post, '/signin', action.payload.data);

    yield put(SigninActions.signinSuccess(response));
  } catch (err) {
    yield put(SigninActions.signinError(err.response.data[0].message));
  }
}
