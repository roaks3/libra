import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  lineChart: {
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'flex',
    padding: '0 1px'
  },

  square: {
    height: '10px',
    margin: '1px',
    width: '10px'
  },

  none: {
    backgroundColor: '#eee'
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

const LineChart = ({ values }) => {
  const categoriesByValue = {
    0: 'none',
    1: 'low',
    2: 'medium',
    3: 'high'
  };
  return (
    <ul className={css(styles.lineChart)}>
      {values.map((value, index) => {
        return (
          <li key={index} className={css(styles.square, styles[categoriesByValue[value] || 'high'])}></li>
        );
      })}
    </ul>
  );
};

LineChart.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default LineChart;
