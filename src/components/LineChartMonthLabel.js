import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  lineChartMonthLabel: {
    alignItems: 'center',
    display: 'flex',
    overflow: 'hidden',
    padding: '0 1px'
  },

  day: {
    fontSize: '9px',
    height: '10px',
    margin: '1px',
    textTransform: 'uppercase',
    width: '10px'
  }
});

const LineChartMonthLabel = ({ utcDateStrings }) => {
  return (
    <ul className={css(styles.lineChartMonthLabel)}>
      {utcDateStrings.map((date, index) => {
        return (
          <li key={index} className={css(styles.day)}>
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
