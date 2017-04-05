import React, { PropTypes } from 'react';
import './LineChart.css';

const LineChart = ({ values }) => {
  const categoriesByValue = {
    0: 'none',
    1: 'low',
    2: 'medium',
    3: 'high'
  };
  return (
    <ul className="lb-LineChart">
      {values.map((value, index) => {
        return (
          <li key={index} className={'lb-LineChart-value-' + categoriesByValue[value]}></li>
        );
      })}
    </ul>
  );
};

LineChart.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default LineChart;
