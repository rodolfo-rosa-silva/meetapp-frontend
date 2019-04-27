import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import history from '../../routes/history';

import { Creators as MeetupNewActions } from '../ducks/meetupNew';

export function* meetupNewLoad() {
  try {
    const response = yield call(api.get, '/preferences');
    yield put(MeetupNewActions.meetupNewLoadSuccess(response.data));
  } catch (err) {
    const message = 'Não foi possível carregar os seus dados';
    yield put(MeetupNewActions.meetupNewLoadError(message));
  }
}

export function* meetupNewSaveLoad(action) {
  try {
    const response = yield call(api.post, '/meetup', action.payload.data);
    yield put(MeetupNewActions.meetupNewSaveSucess(response.data.message));
    history.push('/dashboard');
  } catch (err) {
    // faz uma trativa para os erros que vem em formato de array do adonis
    const { data } = err.response;
    const message = Array.isArray(data) ? data[0].message : data.message;
    yield put(MeetupNewActions.meetupNewSaveError(message));
  }
}
