import React, { PropTypes } from 'react';
import moment from 'moment';
import InterestEventLineChart from './InterestEventLineChart.js';
import './BudgetDetails.css';

const NUM_DAYS = 28;

const BudgetDetails = ({ interestEvents }) => {
  const interestEventsWithinNumDays = interestEvents.filter(interestEvent => {
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

  return (
    <div className="lb-BudgetDetails">
      <div className={'lb-BudgetDetails-fulfill-' + fulfillmentLevel}>
        <span className="lb-BudgetDetails-fulfill-value">
          {fulfillmentTotal}
        </span>
        pts
      </div>
      <div className="lb-BudgetDetails-time">
        <span className="lb-BudgetDetails-time-value">
          {hourTotal}
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

BudgetDetails.propTypes = {
  interestEvents: PropTypes.arrayOf(PropTypes.shape({
    completedAt:PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    fulfillment: PropTypes.number.isRequired
  }).isRequired).isRequired
};

export default BudgetDetails;
