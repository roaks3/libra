import moment from 'moment';
import { getInterestsForGroup } from '../Interest/selectors';

const calculateFulfillmentSummary = (interestEvents, groupingLabel) => {
  const value = interestEvents.reduce(
    (sum, event) => sum + event.fulfillment,
    0
  );

  if (value >= 30) {
    return {
      value,
      level: 'high'
    };
  } else if (value >= 20) {
    return {
      value,
      level: 'medium'
    };
  } else if (value >= 10) {
    return {
      value,
      level: 'low',
      message: {
        text: `In danger of not doing enough ${groupingLabel}`,
        severity: 'warning'
      }
    };
  }
  return {
    value,
    level: 'none',
    message: {
      text: `You should really do more ${groupingLabel}`,
      severity: 'error'
    }
  };
};

export const getEndOfActivityRange = (state, props) => {
  return state.interestEvent.defautInterestEventCompletedOn;
};

export const getStartOfActivityRange = (state, props) => {
  const activityAt = getEndOfActivityRange(state, props);
  return moment(activityAt || moment())
    .subtract(props.numDays, 'days')
    .utc()
    .format();
};

export const getAllInterestEvents = (state, props) => {
  return [...state.interestEvent.interestEvents];
};

export const getInterestEventsForInterest = (state, props) => {
  return state.interestEvent.interestEvents.filter(
    interestEvent => interestEvent.interestId === props.interest.id
  );
};

export const getInterestEventsForInterestGroup = (state, props) => {
  const interestIds = getInterestsForGroup(state, props).map(
    interest => interest.id
  );
  return state.interestEvent.interestEvents.filter(interestEvent =>
    interestIds.includes(interestEvent.interestId)
  );
};

export const getInterestEventsByInterestGroupId = (state, props) => {
  const interestGroupIdsByInterestId = state.interests.reduce(
    (memo, interest) => {
      memo[interest.id] = interest.interestGroupId;
      return memo;
    },
    {}
  );
  return state.interestEvent.interestEvents.reduce((memo, interestEvent) => {
    const interestGroupId =
      interestGroupIdsByInterestId[interestEvent.interestId];
    memo[interestGroupId] = memo[interestGroupId] || [];
    memo[interestGroupId].push(interestEvent);
    return memo;
  }, {});
};

export const getInterestEventsInRange = (state, props) => {
  const rangeStart = getStartOfActivityRange(state, props);
  const rangeEnd = getEndOfActivityRange(state, props);
  const rangeEndMoment = rangeEnd ? moment(rangeEnd) : moment();
  const numDays = rangeEndMoment.diff(moment(rangeStart), 'days');
  return state.interestEvent.interestEvents.filter(interestEvent => {
    return (
      rangeEndMoment.diff(moment(interestEvent.completedOn), 'days') < numDays
    );
  });
};

export const getInterestEventsForInterestInRange = (state, props) => {
  const rangeStart = getStartOfActivityRange(state, props);
  const rangeEnd = getEndOfActivityRange(state, props);
  const rangeEndMoment = rangeEnd ? moment(rangeEnd) : moment();
  const numDays = rangeEndMoment.diff(moment(rangeStart), 'days');
  return getInterestEventsForInterest(state, props).filter(interestEvent => {
    return (
      rangeEndMoment.diff(moment(interestEvent.completedOn), 'days') < numDays
    );
  });
};

export const getInterestEventsForInterestGroupInRange = (state, props) => {
  const rangeStart = getStartOfActivityRange(state, props);
  const rangeEnd = getEndOfActivityRange(state, props);
  const rangeEndMoment = rangeEnd ? moment(rangeEnd) : moment();
  const numDays = rangeEndMoment.diff(moment(rangeStart), 'days');
  return getInterestEventsForInterestGroup(
    state,
    props
  ).filter(interestEvent => {
    return (
      rangeEndMoment.diff(moment(interestEvent.completedOn), 'days') < numDays
    );
  });
};

export const getInterestEventsByInterestGroupIdInRange = (state, props) => {
  const rangeStart = getStartOfActivityRange(state, props);
  const rangeEnd = getEndOfActivityRange(state, props);
  const rangeEndMoment = rangeEnd ? moment(rangeEnd) : moment();
  const numDays = rangeEndMoment.diff(moment(rangeStart), 'days');
  return Object.entries(
    getInterestEventsByInterestGroupId(state, props)
  ).reduce((memo, [key, val]) => {
    memo[key] = val.filter(interestEvent => {
      return (
        rangeEndMoment.diff(moment(interestEvent.completedOn), 'days') < numDays
      );
    });
    return memo;
  }, {});
};

export const getFulfillmentSummaryForInterestGroupInRange = (state, props) => {
  return calculateFulfillmentSummary(
    getInterestEventsForInterestGroupInRange(state, props),
    props.interestGroup.name
  );
};

export const getFulfillmentSummaryForInterestInRange = (state, props) => {
  return calculateFulfillmentSummary(
    getInterestEventsForInterestInRange(state, props),
    props.interest.name
  );
};

export const getFeedbackMessagesInRange = (state, props) => {
  const interestEventsByInterestGroupId = getInterestEventsByInterestGroupIdInRange(state, props);
  const interestGroupsById = state.interestGroups.reduce((memo, interestGroup) => {
    memo[interestGroup.id] = interestGroup;
    return memo;
  }, {});
  return Object.entries(interestEventsByInterestGroupId).map(([interestGroupId, interestEvents]) => {
    if (!interestGroupsById[interestGroupId]) {
      return null;
    }
    return calculateFulfillmentSummary(interestEvents, interestGroupsById[interestGroupId].name).message;
  }).filter(message => message);
};
