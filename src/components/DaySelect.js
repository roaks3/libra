import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  daySelect: {
    'align-items': 'center',
    display: 'flex',
    padding: '0 10px 20px 10px'
  },

  message: {
    'font-size': '14px'
  },

  date: {
    'font-size': '16px',
    'font-weight': '600',
    'letter-spacing': '1px',
    'padding-left': '5px',
    'text-transform': 'uppercase'
  },

  button: {
    'background-color': '#32abeb',
    border: 'none',
    color: 'white',
    display: 'block',
    'font-size': '14px',
    'letter-spacing': '1px',
    'margin-left': '10px',
    padding: '10px 20px',
    'text-transform': 'uppercase'
  }
});

const DaySelect = ({ date, onIncrementDay }) => {
  return (
    <div className={css(styles.daySelect)}>
      {date &&
        <span className={css(styles.message)}>
          Entering for
          {' '}
          <strong className={css(styles.date)}>
            {moment(date).utc().format('ddd (MM/DD)')}
          </strong>
        </span>}
      {date &&
        onIncrementDay &&
        <button onClick={onIncrementDay} className={css(styles.button)}>
          Next Day
        </button>}
    </div>
  );
};

DaySelect.propTypes = {
  date: PropTypes.string.isRequired,
  onIncrementDay: PropTypes.func
};

export default DaySelect;
