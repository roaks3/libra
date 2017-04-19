import React, { PropTypes } from 'react';
import InterestEventLineChart from './InterestEventLineChart.js';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  analyticsDetails: {
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
  },

  warning: {
    color: 'orange'
  },

  danger: {
    color: 'red'
  }
});

const AnalyticsDetails = ({
  allInterestEvents,
  interestEvents,
  startAt,
  endAt
}) => {
  const fulfillmentTotal = interestEvents.reduce(
    (sum, event) => sum + event.fulfillment,
    0
  );
  let fulfillmentLevel = 'none';
  if (fulfillmentTotal >= 30) {
    fulfillmentLevel = 'high';
  } else if (fulfillmentTotal >= 20) {
    fulfillmentLevel = 'medium';
  } else if (fulfillmentTotal >= 10) {
    fulfillmentLevel = 'low';
  }

  const hourTotal = interestEvents.reduce(
    (sum, event) => sum + event.duration,
    0
  );
  const hourTotalAllInterests = allInterestEvents.reduce(
    (sum, event) => sum + event.duration,
    0
  );
  const hourPercent = hourTotal * 100 / hourTotalAllInterests;
  let hourDanger = 'none';
  if (hourPercent < 10) {
    hourDanger = 'danger';
  } else if (hourPercent > 20) {
    hourDanger = 'warning';
  }

  return (
    <div className={css(styles.analyticsDetails)}>
      <div className={css(styles[fulfillmentLevel])}>
        <span className={css(styles.statValue)}>
          {fulfillmentTotal}
        </span>
        pts
      </div>
      <div className={css(styles[hourDanger])}>
        <span className={css(styles.statValue)}>
          {hourPercent.toFixed()}%
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

AnalyticsDetails.propTypes = {
  allInterestEvents: PropTypes.arrayOf(
    PropTypes.shape({
      completedAt: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      fulfillment: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  interestEvents: PropTypes.arrayOf(
    PropTypes.shape({
      completedAt: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      fulfillment: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string
};

export default AnalyticsDetails;
