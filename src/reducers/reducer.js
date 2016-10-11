import * as ActionTypes from '../actions/actionTypes';

let initialState = {
  interestGroups: [],
  interests: []
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
    default:
      return state;
  }
}
