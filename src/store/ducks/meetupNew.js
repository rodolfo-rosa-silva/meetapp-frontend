export const Types = {
  MEETUP_NEW_LOAD: 'meetupNew/MEETUP_NEW_LOAD',
  MEETUP_NEW_LOAD_SUCCESS: 'meetupNew/MEETUP_NEW_LOAD_SUCCESS',
  MEETUP_NEW_LOAD_ERROR: 'meetupNew/MEETUP_NEW_LOAD_ERROR',
  MEETUP_NEW_SAVE_REQUEST: 'meetupNew/MEETUP_NEW_SAVE_REQUEST',
  MEETUP_NEW_SAVE_SUCCESS: 'meetupNew/MEETUP_NEW_SAVE_SUCCESS',
  MEETUP_NEW_SAVE_ERROR: 'meetupNew/MEETUP_NEW_SAVE_ERROR',
};

const INITIAL_STATE = {
  loading: false,
  messageErrorLoading: '',
  preferences: [],
  loadingSave: false,
  messageSave: '',
};

export default function meetupNew(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.MEETUP_NEW_LOAD:
      return { ...state, loading: true, messageSave: '' };
    case Types.MEETUP_NEW_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        preferences: action.payload.data,
      };
    case Types.MEETUP_NEW_LOAD_ERROR:
      return { ...state, loading: false, messageErrorLoading: action.payload.message };
    case Types.MEETUP_NEW_SAVE_REQUEST:
      return { ...state, loadingSave: true };
    case Types.MEETUP_NEW_SAVE_SUCCESS:
      return { ...state, loadingSave: false, messageSave: action.payload.message };
    case Types.MEETUP_NEW_SAVE_ERROR:
      return { ...state, loadingSave: false, messageSave: action.payload.message };
    default:
      return state;
  }
}

export const Creators = {
  meetupNewLoad: () => ({
    type: Types.MEETUP_NEW_LOAD,
  }),

  meetupNewLoadSuccess: data => ({
    type: Types.MEETUP_NEW_LOAD_SUCCESS,
    payload: { data },
  }),

  meetupNewLoadError: message => ({
    type: Types.MEETUP_NEW_LOAD_ERROR,
    payload: { message },
  }),

  meetupNewSaveRequest: data => ({
    type: Types.MEETUP_NEW_SAVE_REQUEST,
    payload: { data },
  }),

  meetupNewSaveSucess: message => ({
    type: Types.MEETUP_NEW_SAVE_SUCCESS,
    payload: { message },
  }),

  meetupNewSaveError: message => ({
    type: Types.MEETUP_NEW_SAVE_ERROR,
    payload: { message },
  }),
};
