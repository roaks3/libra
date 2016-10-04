import Interests from '../sample-data/Interests';
import InterestGroups from '../sample-data/InterestGroups';

let initialState = {
  interestGroups: InterestGroups.getAll(),
  interests: Interests.getAll()
};

export default function mainReducer(state = initialState, action) {
  return state;
}