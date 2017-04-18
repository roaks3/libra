import moment from 'moment';
import { getInterestsForGroup } from '../Interest/selectors';

export const getEndOfActivityRange = (state, props) => {
  return state.interestEvent.defautInterestEventCompletedAt;
};

export const getStartOfActivityRange = (state, props) => {
  const activityAt = getEndOfActivityRange(state, props);
  return moment(activityAt || moment()).subtract(props.numDays, 'days').utc().format();
};

export const getAllInterestEvents = (state, props) => {
  return [...state.interestEvent.interestEvents];
};

export const getInterestEventsForInterest = (state, props) => {
  return state.interestEvent.interestEvents.filter(interestEvent => interestEvent.interestId === props.interest.id);
};

export const getInterestEventsForInterestGroup = (state, props) => {
  const interestIds = getInterestsForGroup(state, props).map(interest => interest.id);
  return state.interestEvent.interestEvents.filter(interestEvent => interestIds.includes(interestEvent.interestId));
};

export const getInterestEventsInRange = (state, props) => {
  const rangeStart = getStartOfActivityRange(state, props);
  const rangeEnd = getEndOfActivityRange(state, props);
  const rangeEndMoment = rangeEnd ? moment(rangeEnd) : moment();
  const numDays = rangeEndMoment.diff(moment(rangeStart), 'days');
  return state.interestEvent.interestEvents.filter(interestEvent => {
    return rangeEndMoment.diff(moment(interestEvent.completedAt), 'days') < numDays;
  });
};

export const getInterestEventsForInterestInRange = (state, props) => {
  const rangeStart = getStartOfActivityRange(state, props);
  const rangeEnd = getEndOfActivityRange(state, props);
  const rangeEndMoment = rangeEnd ? moment(rangeEnd) : moment();
  const numDays = rangeEndMoment.diff(moment(rangeStart), 'days');
  return getInterestEventsForInterest(state, props).filter(interestEvent => {
    return rangeEndMoment.diff(moment(interestEvent.completedAt), 'days') < numDays;
  });
};

export const getInterestEventsForInterestGroupInRange = (state, props) => {
  const rangeStart = getStartOfActivityRange(state, props);
  const rangeEnd = getEndOfActivityRange(state, props);
  const rangeEndMoment = rangeEnd ? moment(rangeEnd) : moment();
  const numDays = rangeEndMoment.diff(moment(rangeStart), 'days');
  return getInterestEventsForInterestGroup(state, props).filter(interestEvent => {
    return rangeEndMoment.diff(moment(interestEvent.completedAt), 'days') < numDays;
  });
};
