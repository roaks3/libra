import React from 'react';
import PropTypes from 'prop-types';
import InterestEventLineChart from './InterestEventLineChart.js';
import FulfillmentSummary from './FulfillmentSummary.js';
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
  endAt,
  fulfillmentSummary
}) => {
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
      <FulfillmentSummary fulfillmentSummary={fulfillmentSummary}/>
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
      completedOn: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      fulfillment: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
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

export default AnalyticsDetails;
