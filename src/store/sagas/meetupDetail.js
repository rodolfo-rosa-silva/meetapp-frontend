import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as MeetupDetailActions } from '../ducks/meetupDetail';

export function* meetupLoad(action) {
  try {
    const response = yield call(api.get, `/meetup/${action.payload.meetupId}`);
    yield put(MeetupDetailActions.meetupLoadSuccess(response.data));
  } catch (err) {
    const message = 'Não foi possível carregar o meetup';
    yield put(MeetupDetailActions.meetupLoadError(message));
  }
}
