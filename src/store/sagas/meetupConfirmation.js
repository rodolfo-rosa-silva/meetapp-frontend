import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as MeetupConfirmationActions } from '../ducks/meetupConfirmation';

export function* meetupConfirmationLoad(action) {
  try {
    const response = yield call(api.post, '/meetup/confirmation', {
      meetup_id: action.payload.meetupId,
    });
    yield put(MeetupConfirmationActions.meetupConfirmationSuccess(response.data));
  } catch (err) {
    const message = 'Não foi possível carregar o meetup';
    yield put(MeetupConfirmationActions.meetupConfirmationError(message));
  }
}
