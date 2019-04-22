export const Types = {
  MEETUP_LOAD: 'meetup/MEETUP_LOAD',
  MEETUP_LOAD_SUCCESS: 'meetup/MEETUP_LOAD_SUCCESS',
  MEETUP_LOAD_ERROR: 'meetup/MEETUP_LOAD_ERROR',
  SUBSCRIPTION_LOAD: 'subscription/SUBSCRIPTION_LOAD',
  SUBSCRIPTION_SUCCESS: 'subscription/SUBSCRIPTION_SUCCESS',
  SUBSCRIPTION_ERROR: 'subscription/SUBSCRIPTION_ERROR',
};

const INITIAL_STATE = {
  messageError: '',
  loading: false,
  meetup: {},
  subscription: false,
  messageSubscritionError: '',
  loadingSubscription: false,
};

export default function meetupDetail(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.MEETUP_LOAD:
      return { ...state, loading: true };
    case Types.MEETUP_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        meetup: action.payload.data.meetup,
        subscription: action.payload.data.subscription,
      };
    case Types.MEETUP_LOAD_ERROR:
      return { ...state, loading: false, messageError: action.payload.message };
    case Types.SUBSCRIPTION_LOAD:
      return { ...state, loadingSubscription: true };
    case Types.SUBSCRIPTION_SUCCESS:
      return { ...state, loadingSubscription: false, subscription: true };
    case Types.SUBSCRIPTION_ERROR:
      return {
        ...state,
        loadingSubscription: false,
        messageSubscritionError: action.payload.message,
      };
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

  subscriptionLoad: meetupId => ({
    type: Types.SUBSCRIPTION_LOAD,
    payload: { meetupId },
  }),

  subscriptionSuccess: () => ({
    type: Types.SUBSCRIPTION_SUCCESS,
  }),

  subscriptionError: message => ({
    type: Types.SUBSCRIPTION_ERROR,
    payload: { message },
  }),
};
