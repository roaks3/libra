import React, { PropTypes } from 'react';
import moment from 'moment';
import InterestEventLineChart from './InterestEventLineChart.js';
import './AnalyticsDetails.css';

const NUM_DAYS = 42;

const AnalyticsDetails = ({ allInterestEvents, interestEvents }) => {
  const interestEventsWithinNumDays = interestEvents.filter(interestEvent => {
    return moment().diff(moment(interestEvent.completedAt), 'days') < NUM_DAYS;
  });

  const allInterestEventsWithinNumDays = allInterestEvents.filter(interestEvent => {
    return moment().diff(moment(interestEvent.completedAt), 'days') < NUM_DAYS;
  });

  const fulfillmentTotal = interestEventsWithinNumDays.reduce((sum, event) => sum + event.fulfillment, 0);
  let fulfillmentLevel = 'none';
  if (fulfillmentTotal >= 30) {
    fulfillmentLevel = 'high';
  } else if (fulfillmentTotal >= 20) {
    fulfillmentLevel = 'medium';
  } else if (fulfillmentTotal >= 10) {
    fulfillmentLevel = 'low';
  }

  const hourTotal = interestEventsWithinNumDays.reduce((sum, event) => sum + event.duration, 0);
  const hourTotalAllInterests =
    allInterestEventsWithinNumDays.reduce((sum, event) => sum + event.duration, 0);
  const hourPercent = hourTotal * 100 / hourTotalAllInterests;
  let hourDanger = 'none';
  if (hourPercent < 10) {
    hourDanger = 'danger';
  } else if (hourPercent > 20) {
    hourDanger = 'warning';
  }

  return (
    <div className="lb-AnalyticsDetails">
      <div className={'lb-AnalyticsDetails-fulfill-' + fulfillmentLevel}>
        <span className="lb-BudgetDetails-fulfill-value">
          {fulfillmentTotal}
        </span>
        pts
      </div>
      <div className={'lb-AnalyticsDetails-time-' + hourDanger}>
        <span className="lb-BudgetDetails-time-value">
          {hourPercent.toFixed()}%
        </span>
        hr
      </div>
      <InterestEventLineChart
        interestEvents={interestEvents}
        numDays={NUM_DAYS}
      />
    </div>
  );
};

AnalyticsDetails.propTypes = {
  allInterestEvents: PropTypes.arrayOf(PropTypes.shape({
    completedAt:PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    fulfillment: PropTypes.number.isRequired
  }).isRequired).isRequired,
  interestEvents: PropTypes.arrayOf(PropTypes.shape({
    completedAt:PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    fulfillment: PropTypes.number.isRequired
  }).isRequired).isRequired
};

export default AnalyticsDetails;
