import { selectInterestsForGroup } from '../Interest/selectors';

export const selectInterestEventsForInterest = (state, props) => {
  return state.interestEvents.interestEvents.filter(interestEvent => interestEvent.interestId === props.interest.id);
};

export const selectInterestEventsForInterestGroup = (state, props) => {
  const interestIds = selectInterestsForGroup(state, props).map(interest => interest.id);
  return state.interestEvents.interestEvents.filter(interestEvent => interestIds.includes(interestEvent.interestId));
};
