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

export function* subscriptionLoad(action) {
  try {
    const { meetupId } = action.payload;
    yield call(api.post, '/meetup/subscription', {
      meetup_id: meetupId,
      redirect_url: `localhost:3000/meetup/${meetupId}/confirmation`,
    });
    yield put(MeetupDetailActions.subscriptionSuccess());
  } catch (err) {
    const message = 'Não foi possível se inscrever no meetup';
    yield put(MeetupDetailActions.subscriptionError(message));
  }
}
