import React from 'react';
import PropTypes from 'prop-types';
import InterestEventLineChart from './InterestEventLineChart.js';
import FulfillmentSummary from './FulfillmentSummary.js';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  budgetDetails: {
    display: 'flex',
    fontSize: '14px',
    justifyContent: 'space-between',
    paddingLeft: '20px',
    width: '870px'
  },

  statValue: {
    fontSize: '20px',
    padding: '0 5px'
  }
});

const BudgetDetails = ({ interestEvents, startAt, endAt, fulfillmentSummary }) => {
  const hourTotal = interestEvents.reduce(
    (sum, event) => sum + event.duration,
    0
  );

  return (
    <div className={css(styles.budgetDetails)}>
      <FulfillmentSummary fulfillmentSummary={fulfillmentSummary}/>
      <div>
        <span className={css(styles.statValue)}>
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
  interestEvents: PropTypes.arrayOf(
    PropTypes.shape({
      completedOn: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      fulfillment: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string,
  fulfillmentSummary: PropTypes.shape({
    value: PropTypes.number,
    level: PropTypes.string,
    message: PropTypes.any
  })
};

export default BudgetDetails;
