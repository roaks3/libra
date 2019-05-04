import moment from 'moment';
import {
  REQUEST_INTEREST_EVENTS,
  RECEIVE_INTEREST_EVENTS,
  LOG_INTEREST_EVENT_REQUEST,
  LOG_INTEREST_EVENT_SUCCESS,
  INCREMENT_DEFAULT_INTEREST_EVENT_COMPLETED_ON
} from './actions';

const mostRecentInterestEvent = interestEvents => {
  return interestEvents.reduce((memo, interestEvent) => {
    if (!memo || interestEvent.completedOn > memo.completedOn) {
      return interestEvent;
    }
    return memo;
  }, null);
};

const initialState = {
  interestEvents: [],
  successMessage: null,
  defautInterestEventCompletedOn: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_INTEREST_EVENTS:
      return {
        ...state,
        interestEvents: []
      };
    case RECEIVE_INTEREST_EVENTS:
      const mostRecent = mostRecentInterestEvent(action.interestEvents);
      return {
        ...state,
        interestEvents: action.interestEvents,
        defautInterestEventCompletedOn: mostRecent && mostRecent.completedOn
      };
    case LOG_INTEREST_EVENT_REQUEST:
      return {
        ...state,
        successMessage: null
      };
    case LOG_INTEREST_EVENT_SUCCESS:
      return {
        ...state,
        interestEvents: [...state.interestEvents, action.interestEvent],
        successMessage: `Logged event: ${action.interest.name}`
      };
    case INCREMENT_DEFAULT_INTEREST_EVENT_COMPLETED_ON:
      return {
        ...state,
        defautInterestEventCompletedOn: moment(
          state.defautInterestEventCompletedOn
        )
          .add(1, 'days')
          .utc()
          .format()
      };
    default:
      return state;
  }
};
