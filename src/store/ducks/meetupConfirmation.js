export const Types = {
  MEETUP_CONFIRMATION_LOAD: 'meetupConfirmation/MEETUP_CONFIRMATION_LOAD',
  MEETUP_CONFIRMATION_SUCCESS: 'meetupConfirmation/MEETUP_CONFIRMATION_SUCCESS',
  MEETUP_CONFIRMATION_ERROR: 'meetupConfirmation/MEETUP_CONFIRMATION_ERROR',
};

const INITIAL_STATE = {
  messageError: '',
  messageSuccess: '',
  loading: false,
  meetup: {},
};

export default function meetupConfirmation(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.MEETUP_CONFIRMATION_LOAD:
      return { ...state, loading: true };
    case Types.MEETUP_CONFIRMATION_SUCCESS:
      return {
        ...state,
        loading: false,
        meetup: action.payload.data.meetup,
        messageSuccess: action.payload.data.message,
      };
    case Types.MEETUP_CONFIRMATION_ERROR:
      return {
        ...state, loading: false, messageError: action.payload.message, messageSuccess: '',
      };
    default:
      return state;
  }
}

export const Creators = {
  meetupConfirmationLoad: meetupId => ({
    type: Types.MEETUP_CONFIRMATION_LOAD,
    payload: { meetupId },
  }),

  meetupConfirmationSuccess: data => ({
    type: Types.MEETUP_CONFIRMATION_SUCCESS,
    payload: { data },
  }),

  meetupConfirmationError: message => ({
    type: Types.MEETUP_CONFIRMATION_ERROR,
    payload: { message },
  }),
};
