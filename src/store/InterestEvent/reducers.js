import {
  REQUEST_INTEREST_EVENTS, RECEIVE_INTEREST_EVENTS,
  LOG_INTEREST_EVENT_REQUEST, LOG_INTEREST_EVENT_SUCCESS
} from './actions';

const initialState = {
  interestEvents: [],
  successMessage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_INTEREST_EVENTS:
      return {
        ...state,
        interestEvents: []
      };
    case RECEIVE_INTEREST_EVENTS:
      return {
        ...state,
        interestEvents: action.interestEvents
      };
    case LOG_INTEREST_EVENT_REQUEST:
      return {
        ...state,
        successMessage: null
      };
    case LOG_INTEREST_EVENT_SUCCESS:
      return {
        interestEvents: [...state.interestEvents, action.interestEvent],
        successMessage: `Logged event: ${action.interest.name}`
      };
    default:
      return state;
  }
}
