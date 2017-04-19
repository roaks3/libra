import { REQUEST_INTEREST_GROUPS, RECEIVE_INTEREST_GROUPS } from './actions';

export default (state = [], action) => {
  switch (action.type) {
    case REQUEST_INTEREST_GROUPS:
      return [];
    case RECEIVE_INTEREST_GROUPS:
      return action.interestGroups;
    default:
      return state;
  }
};
