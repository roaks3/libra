import React, { PropTypes } from 'react';
import moment from 'moment';
import LineChartMonthLabel from './LineChartMonthLabel.js';
import LineChart from './LineChart.js';

const InterestEventLineChart = ({ interestEvents, numDays }) => {
  const utcDateStrings = new Array(numDays)
    .fill('')
    .map((_, index) => {
      return moment().subtract(index, 'days').utc().format();
    })
    .reverse();

  const lineChartValues = interestEvents
    .reduce((memo, interestEvent) => {
      const daysAgo = moment().diff(moment(interestEvent.completedAt), 'days');
      if (daysAgo < numDays) {
        memo[daysAgo]++;
      }
      return memo;
    }, new Array(numDays).fill(0))
    .reverse();

  return (
    <div className="lb-InterestEventLineChart">
      <LineChartMonthLabel
        utcDateStrings={utcDateStrings}
      />
      <LineChart
        values={lineChartValues}
      />
    </div>
  );
};

InterestEventLineChart.propTypes = {
  interestEvents: PropTypes.arrayOf(PropTypes.shape({
    completedAt:PropTypes.string.isRequired
  }).isRequired).isRequired,
  numDays: PropTypes.number.isRequired
};

export default InterestEventLineChart;
