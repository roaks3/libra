import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import LineChartMonthLabel from './LineChartMonthLabel.js';
import LineChart from './LineChart.js';

const InterestEventLineChart = ({ interestEvents, startAt, endAt }) => {
  const endMoment = endAt ? moment(endAt) : moment();
  const numDays = endMoment.diff(moment(startAt), 'days');

  const utcDateStrings = new Array(numDays)
    .fill('')
    .map((_, index) => {
      return moment(endMoment).subtract(index, 'days').utc().format();
    })
    .reverse();

  const lineChartValues = interestEvents
    .reduce((memo, interestEvent) => {
      const daysAgo = endMoment.diff(moment(interestEvent.completedOn), 'days');
      if (daysAgo < numDays) {
        memo[daysAgo]++;
      }
      return memo;
    }, new Array(numDays).fill(0))
    .reverse();

  return (
    <div>
      <LineChartMonthLabel utcDateStrings={utcDateStrings} />
      <LineChart values={lineChartValues} />
    </div>
  );
};

InterestEventLineChart.propTypes = {
  interestEvents: PropTypes.arrayOf(
    PropTypes.shape({
      completedOn: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string
};

export default InterestEventLineChart;
