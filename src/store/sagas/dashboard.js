import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PreferencesActions } from '../ducks/dashboard';

export function* dashboardLoad(action) {
  try {
    const { filter } = action.payload;
    const url = filter.length > 0 ? `/dashboard?s=${filter}` : '/dashboard';
    const response = yield call(api.get, url);
    yield put(PreferencesActions.dashboardLoadSuccess(response.data));
  } catch (err) {
    const message = 'Não foi possível carregar os meetups';
    yield put(PreferencesActions.dashboardLoadError(message));
  }
}
