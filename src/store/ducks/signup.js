export const Types = {
  SIGNUP_REQUEST: 'signup/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'signup/SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'signup/SIGNUP_ERROR',
};

const INITIAL_STATE = {
  message: '',
  loading: false,
};

export default function signup(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGNUP_REQUEST:
      return { ...state, loading: true, message: 'Enviando...' };
    case Types.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    case Types.SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
}

export const Creators = {
  signupRequest: data => ({
    type: Types.SIGNUP_REQUEST,
    payload: { data },
  }),

  signupSuccess: message => ({
    type: Types.SIGNUP_SUCCESS,
    payload: { message },
  }),

  signupError: message => ({
    type: Types.SIGNUP_ERROR,
    payload: { message },
  }),
};
