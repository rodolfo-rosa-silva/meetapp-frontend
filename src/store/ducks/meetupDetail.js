export const Types = {
  MEETUP_LOAD: 'meetup/MEETUP_LOAD',
  MEETUP_LOAD_SUCCESS: 'meetup/MEETUP_LOAD_SUCCESS',
  MEETUP_LOAD_ERROR: 'meetup/MEETUP_LOAD_ERROR',
};

const INITIAL_STATE = {
  messageError: '',
  loading: false,
  data: {},
};

export default function meetupDetail(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.MEETUP_LOAD:
      return { ...state, loading: true };
    case Types.MEETUP_LOAD_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.MEETUP_LOAD_ERROR:
      return { ...state, loading: false, messageError: action.payload.message };
    default:
      return state;
  }
}

export const Creators = {
  meetupLoad: meetupId => ({
    type: Types.MEETUP_LOAD,
    payload: { meetupId },
  }),

  meetupLoadSuccess: data => ({
    type: Types.MEETUP_LOAD_SUCCESS,
    payload: { data },
  }),

  meetupLoadError: message => ({
    type: Types.MEETUP_LOAD_ERROR,
    payload: { message },
  }),
};
