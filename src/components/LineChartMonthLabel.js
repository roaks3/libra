import moment from 'moment';
import React, { PropTypes } from 'react';
import './LineChartMonthLabel.css';

const LineChartMonthLabel = ({ utcDateStrings }) => {
  return (
    <ul className="lb-LineChartMonthLabel">
      {utcDateStrings.map((date, index) => {
        return (
          <li key={index} className="lb-LineChartMonthLabel-day">
            {moment(date).date() === 1 ? moment(date).format('MMM') : ''}
          </li>
        );
      })}
    </ul>
  );
};

LineChartMonthLabel.propTypes = {
  utcDateStrings: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default LineChartMonthLabel;
