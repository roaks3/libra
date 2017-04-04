import { combineReducers } from 'redux';
import interestGroups from './InterestGroup/reducers';
import interests from './Interest/reducers';
import interestEvents from './InterestEvent/reducers';

export default combineReducers({
  interestGroups,
  interests,
  interestEvents
});
