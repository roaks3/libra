import React, { PropTypes } from 'react';
import InterestEventLineChart from './InterestEventLineChart.js';
import './BudgetDetails.css';

const BudgetDetails = ({ interestEvents, startAt, endAt }) => {
  const fulfillmentTotal = interestEvents.reduce((sum, event) => sum + event.fulfillment, 0);
  let fulfillmentLevel = 'none';
  if (fulfillmentTotal >= 30) {
    fulfillmentLevel = 'high';
  } else if (fulfillmentTotal >= 20) {
    fulfillmentLevel = 'medium';
  } else if (fulfillmentTotal >= 10) {
    fulfillmentLevel = 'low';
  }

  const hourTotal = interestEvents.reduce((sum, event) => sum + event.duration, 0);

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
        startAt={startAt}
        endAt={endAt}
      />
    </div>
  );
};

BudgetDetails.propTypes = {
  interestEvents: PropTypes.arrayOf(PropTypes.shape({
    completedAt:PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    fulfillment: PropTypes.number.isRequired
  }).isRequired).isRequired,
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string
};

export default BudgetDetails;
