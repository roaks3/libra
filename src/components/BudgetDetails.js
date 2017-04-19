import React, { PropTypes } from 'react';
import InterestEventLineChart from './InterestEventLineChart.js';
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
  },

  low: {
    backgroundColor: '#c6e48b'
  },

  medium: {
    backgroundColor: '#7bc96f'
  },

  high: {
    backgroundColor: '#239a3b'
  }
});

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
    <div className={css(styles.budgetDetails)}>
      <div className={css(styles[fulfillmentLevel])}>
        <span className={css(styles.statValue)}>
          {fulfillmentTotal}
        </span>
        pts
      </div>
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
  interestEvents: PropTypes.arrayOf(PropTypes.shape({
    completedAt:PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    fulfillment: PropTypes.number.isRequired
  }).isRequired).isRequired,
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string
};

export default BudgetDetails;
