import {
  LOG_INTEREST_EVENT_REQUEST, LOG_INTEREST_EVENT_SUCCESS
} from './actions';

const initialState = {
  successMessage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_INTEREST_EVENT_REQUEST:
      return {
        successMessage: null
      };
    case LOG_INTEREST_EVENT_SUCCESS:
      const interest = state.interests.find(i => i.id === action.interestEvent.interestId);
      return {
        successMessage: `Logged event: ${interest.name}`
      };
    default:
      return state;
  }
}
