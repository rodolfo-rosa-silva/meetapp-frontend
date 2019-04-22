import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProfileActions } from '../ducks/profile';

export function* profileLoad() {
  try {
    const response = yield call(api.get, '/profile');
    yield put(ProfileActions.profileLoadSuccess(response.data));
  } catch (err) {
    const message = 'Não foi possível carregar os seus dados';
    yield put(ProfileActions.profileLoadError(message));
  }
}
