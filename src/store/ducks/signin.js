export const Types = {
  SIGNIN_REQUEST: 'signin/SIGNIN_REQUEST',
  SIGNIN_SUCCESS: 'signin/SIGNIN_SUCCESS',
  SIGNIN_ERROR: 'signin/SIGNIN_ERROR',
};

const INITIAL_STATE = {
  message: '',
  loading: false,
};

export default function signin(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGNIN_REQUEST:
      return { ...state, loading: true, message: 'Enviando...' };
    case Types.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: '',
      };
    case Types.SIGNIN_ERROR:
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
  signinRequest: data => ({
    type: Types.SIGNIN_REQUEST,
    payload: { data },
  }),

  signinSuccess: data => ({
    type: Types.SIGNIN_SUCCESS,
    payload: { data },
  }),

  signinError: message => ({
    type: Types.SIGNIN_ERROR,
    payload: { message },
  }),
};
