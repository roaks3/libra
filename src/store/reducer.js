import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import interestGroups from './InterestGroup/reducers';
import interests from './Interest/reducers';
import interestEvent from './InterestEvent/reducers';

export default combineReducers({
  routerReducer,
  interestGroups,
  interests,
  interestEvent
});
