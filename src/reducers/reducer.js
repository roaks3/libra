import { combineReducers } from 'redux';
import interestGroups from '../store/InterestGroup/reducers';
import interests from '../store/Interest/reducers';
import interestEvents from '../store/InterestEvent/reducers';

export default combineReducers({
  interestGroups,
  interests,
  interestEvents
});
