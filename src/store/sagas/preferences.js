import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import history from '../../routes/history';

import { Creators as PreferencesActions } from '../ducks/preferences';

export function* preferencesLoad() {
  try {
    const response = yield call(api.get, '/preferences');
    yield put(PreferencesActions.preferencesLoadSuccess(response.data));
  } catch (err) {
    const message = 'Não foi possível carregar a lista de preferências';
    yield put(PreferencesActions.preferencesLoadError(message));
  }
}
export function* preferencesRequest(action) {
  try {
    const response = yield call(api.post, '/preferences/save', {
      preferences: action.payload.data,
    });
    yield put(PreferencesActions.preferencesSuccess(response.data.message));
    history.push('/dashboard');
  } catch (err) {
    // faz uma trativa para os erros que vem em formato de array do adonis
    const { data } = err.response;
    const message = Array.isArray(data) ? data[0].message : data.message;

    yield put(PreferencesActions.preferencesError(message));
  }
}
