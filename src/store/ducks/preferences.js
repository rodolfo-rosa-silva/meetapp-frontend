export const Types = {
  PREFERENCES_LOAD: 'preferences/PREFERENCES_LOAD',
  PREFERENCES_LOAD_SUCCESS: 'preferences/PREFERENCES_LOAD_SUCCESS',
  PREFERENCES_LOAD_ERROR: 'preferences/PREFERENCES_LOAD_ERROR',
  PREFERENCES_REQUEST: 'preferences/PREFERENCES_REQUEST',
  PREFERENCES_SUCCESS: 'preferences/PREFERENCES_SUCCESS',
  PREFERENCES_ERROR: 'preferences/PREFERENCES_ERROR',
};

const INITIAL_STATE = {
  message: '',
  messageErrorLoad: '',
  loadingData: false,
  loadingForm: false,
  listPreferences: [],
};

export default function preferences(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PREFERENCES_LOAD:
      return { ...state, loadingData: true };
    case Types.PREFERENCES_LOAD_SUCCESS:
      return { ...state, loadingData: false, listPreferences: action.payload.data };
    case Types.PREFERENCES_LOAD_ERROR:
      return { ...state, loadingData: false, messageErrorLoad: action.payload.message };
    case Types.PREFERENCES_REQUEST:
      return { ...state, loadingForm: true, message: 'Enviando...' };
    case Types.PREFERENCES_SUCCESS:
      return {
        ...state,
        loadingForm: false,
        message: '',
      };
    case Types.PREFERENCES_ERROR:
      return {
        ...state,
        loadingForm: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
}

export const Creators = {
  preferencesLoad: () => ({
    type: Types.PREFERENCES_LOAD,
  }),

  preferencesLoadSuccess: data => ({
    type: Types.PREFERENCES_LOAD_SUCCESS,
    payload: { data },
  }),

  preferencesLoadError: message => ({
    type: Types.PREFERENCES_LOAD_ERROR,
    payload: { message },
  }),

  preferencesRequest: data => ({
    type: Types.PREFERENCES_REQUEST,
    payload: { data },
  }),

  preferencesSuccess: message => ({
    type: Types.PREFERENCES_SUCCESS,
    payload: { message },
  }),

  preferencesError: message => ({
    type: Types.PREFERENCES_ERROR,
    payload: { message },
  }),
};
