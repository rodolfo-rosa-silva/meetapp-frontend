import { all, takeLatest } from 'redux-saga/effects';

import { Types as SigninTypes } from '../ducks/signin';
import { Types as SignupTypes } from '../ducks/signup';
import { Types as PreferencesTypes } from '../ducks/preferences';
import { Types as DashboardTypes } from '../ducks/dashboard';
import { Types as MeetupDetailTypes } from '../ducks/meetupDetail';
import { Types as MeetupConfirmationTypes } from '../ducks/meetupConfirmation';
import { Types as ProfileTypes } from '../ducks/profile';

import { signin } from './signin';
import { signup } from './signup';
import { preferencesLoad, preferencesRequest } from './preferences';
import { dashboardLoad } from './dashboard';
import { meetupLoad, subscriptionLoad } from './meetupDetail';
import { meetupConfirmationLoad } from './meetupConfirmation';
import { profileLoad } from './profile';

export default function* rootSaga() {
  yield all([takeLatest(SigninTypes.SIGNIN_REQUEST, signin)]);
  yield all([takeLatest(SignupTypes.SIGNUP_REQUEST, signup)]);
  yield all([takeLatest(PreferencesTypes.PREFERENCES_LOAD, preferencesLoad)]);
  yield all([takeLatest(PreferencesTypes.PREFERENCES_REQUEST, preferencesRequest)]);
  yield all([takeLatest(DashboardTypes.DASHBOARD_LOAD, dashboardLoad)]);
  yield all([takeLatest(MeetupDetailTypes.MEETUP_LOAD, meetupLoad)]);
  yield all([takeLatest(MeetupDetailTypes.SUBSCRIPTION_LOAD, subscriptionLoad)]);
  yield all([takeLatest(MeetupConfirmationTypes.MEETUP_CONFIRMATION_LOAD, meetupConfirmationLoad)]);
  yield all([takeLatest(ProfileTypes.PROFILE_LOAD, profileLoad)]);
}
