import { all, takeLatest } from 'redux-saga/effects';

import { Types as SigninTypes } from '../ducks/signin';

import { sendDataSignin } from './signin';

export default function* rootSaga() {
  yield all([takeLatest(SigninTypes.SIGNIN_REQUEST, sendDataSignin)]);
}
