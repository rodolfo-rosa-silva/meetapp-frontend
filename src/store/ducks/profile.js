export const Types = {
  PROFILE_LOAD: 'profile/PROFILE_LOAD',
  PROFILE_LOAD_SUCCESS: 'profile/PROFILE_LOAD_SUCCESS',
  PROFILE_LOAD_ERROR: 'profile/PROFILE_LOAD_ERROR',
};

const INITIAL_STATE = {
  loading: false,
  messageErrorLoading: '',
  user: {},
  userPreferences: [],
  preferences: [],
};

export default function profile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PROFILE_LOAD:
      return { ...state, loading: true };
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
};
