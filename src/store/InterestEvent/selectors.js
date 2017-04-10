import { getInterestsForGroup } from '../Interest/selectors';

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
