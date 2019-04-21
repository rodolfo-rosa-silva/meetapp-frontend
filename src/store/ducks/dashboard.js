export const Types = {
  DASHBOARD_LOAD: 'dashboard/DASHBOARD_LOAD',
  DASHBOARD_LOAD_SUCCESS: 'dashboard/DASHBOARD_LOAD_SUCCESS',
  DASHBOARD_LOAD_ERROR: 'dashboard/DASHBOARD_LOAD_ERROR',
};

const INITIAL_STATE = {
  messageError: '',
  loading: false,
  meetups: {},
};

export default function dashboard(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.DASHBOARD_LOAD:
      return { ...state, loading: true };
    case Types.DASHBOARD_LOAD_SUCCESS:
      return { ...state, loading: false, meetups: action.payload.data };
    case Types.DASHBOARD_LOAD_ERROR:
      return { ...state, loading: false, messageError: action.payload.message };
    default:
      return state;
  }
}

export const Creators = {
  dashboardLoad: filter => ({
    type: Types.DASHBOARD_LOAD,
    payload: { filter },
  }),

  dashboardLoadSuccess: data => ({
    type: Types.DASHBOARD_LOAD_SUCCESS,
    payload: { data },
  }),

  dashboardLoadError: message => ({
    type: Types.DASHBOARD_LOAD_ERROR,
    payload: { message },
  }),
};
