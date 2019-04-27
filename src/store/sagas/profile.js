import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import history from '../../routes/history';

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

export function* profileSaveLoad(action) {
  try {
    const {
      username, password, passwordConfirmation, preferences,
    } = action.payload.data;
    const response = yield call(api.put, '/profile', {
      username,
      password,
      password_confirmation: passwordConfirmation,
      preferences,
    });
    yield put(ProfileActions.profileSaveSucess(response.data.message));
    localStorage.setItem('@meetapp:username', username);
    history.push('/dashboard');
  } catch (err) {
    // faz uma trativa para os erros que vem em formato de array do adonis
    const { data } = err.response;
    const message = Array.isArray(data) ? data[0].message : data.message;
    yield put(ProfileActions.profileSaveError(message));
  }
}
