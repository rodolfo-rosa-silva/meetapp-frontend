export const Types = {
  PROFILE_LOAD: 'profile/PROFILE_LOAD',
  PROFILE_LOAD_SUCCESS: 'profile/PROFILE_LOAD_SUCCESS',
  PROFILE_LOAD_ERROR: 'profile/PROFILE_LOAD_ERROR',
  PROFILE_SAVE_REQUEST: 'profile/PROFILE_SAVE_REQUEST',
  PROFILE_SAVE_SUCCESS: 'profile/PROFILE_SAVE_SUCCESS',
  PROFILE_SAVE_ERROR: 'profile/PROFILE_SAVE_ERROR',
};

const INITIAL_STATE = {
  loading: false,
  messageErrorLoading: '',
  user: {},
  userPreferences: [],
  preferences: [],
  loadingSave: false,
  messageSave: '',
};

export default function profile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PROFILE_LOAD:
      return { ...state, loading: true, messageSave: '' };
    case Types.PROFILE_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        preferences: action.payload.data.preferences,
        user: action.payload.data.user,
        userPreferences: action.payload.data.userPreferences,
      };
    case Types.PROFILE_LOAD_ERROR:
      return { ...state, loading: false, messageErrorLoading: action.payload.message };
    case Types.PROFILE_SAVE_REQUEST:
      return { ...state, loadingSave: true };
    case Types.PROFILE_SAVE_SUCCESS:
      return { ...state, loadingSave: false, messageSave: action.payload.message };
    case Types.PROFILE_SAVE_ERROR:
      return { ...state, loadingSave: false, messageSave: action.payload.message };
    default:
      return state;
  }
}

export const Creators = {
  profileLoad: () => ({
    type: Types.PROFILE_LOAD,
  }),

  profileLoadSuccess: data => ({
    type: Types.PROFILE_LOAD_SUCCESS,
    payload: { data },
  }),

  profileLoadError: message => ({
    type: Types.PROFILE_LOAD_ERROR,
    payload: { message },
  }),

  profileSaveRequest: data => ({
    type: Types.PROFILE_SAVE_REQUEST,
    payload: { data },
  }),

  profileSaveSucess: message => ({
    type: Types.PROFILE_SAVE_SUCCESS,
    payload: { message },
  }),

  profileSaveError: message => ({
    type: Types.PROFILE_SAVE_ERROR,
    payload: { message },
  }),
};
