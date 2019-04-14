export const Types = {
  SIGNIN_REQUEST: 'signin/SIGNIN_REQUEST',
  SIGNIN_SUCCESS: 'signin/SIGNIN_SUCCESS',
  SIGNIN_ERROR: 'signin/SIGNIN_ERROR',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function signin(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGNIN_REQUEST:
      return { ...state, loading: true };
    case Types.SIGNIN_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.SIGNIN_ERROR:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  signinUserAction: data => ({
    type: Types.SIGNIN_REQUEST,
    payload: { data },
  }),
  signinUserSuccess: data => ({
    type: Types.SIGNIN_SUCCESS,
    payload: { data },
  }),
};
