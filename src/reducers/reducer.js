import * as ActionTypes from '../actions/actionTypes';

let initialState = {
  interestGroups: [],
  interests: [],
  successMessage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_INTEREST_GROUPS:
      return {
        ...state,
        interestGroups: []
      };
    case ActionTypes.RECEIVE_INTEREST_GROUPS:
      return {
        ...state,
        interestGroups: action.interestGroups
      };
    case ActionTypes.REQUEST_INTERESTS:
      return {
        ...state,
        interests: []
      };
    case ActionTypes.RECEIVE_INTERESTS:
      return {
        ...state,
        interests: action.interests
      };
    case ActionTypes.LOG_INTEREST_EVENT_REQUEST:
      return {
        ...state,
        successMessage: null
      };
    case ActionTypes.LOG_INTEREST_EVENT_SUCCESS:
      let interest = state.interests.find(i => i.id === action.interestEvent.interestId);
      return {
        ...state,
        successMessage: `Logged event: ${interest.name}`
      };
    default:
      return state;
  }
}
