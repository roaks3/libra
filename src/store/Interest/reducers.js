import { REQUEST_INTERESTS, RECEIVE_INTERESTS } from './actions';

export default (state = [], action) => {
  switch (action.type) {
    case REQUEST_INTERESTS:
      return [];
    case RECEIVE_INTERESTS:
      return action.interests;
    default:
      return state;
  }
};
