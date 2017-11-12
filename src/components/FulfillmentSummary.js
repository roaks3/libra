import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
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

const FulfillmentSummary = ({fulfillmentSummary}) => {
  return (
    <div className={css(styles[fulfillmentSummary.level])}>
      <span className={css(styles.statValue)}>
        {fulfillmentSummary.value}
      </span>
      pts
    </div>
  );
};

FulfillmentSummary.propTypes = {
  fulfillmentSummary: PropTypes.shape({
    value: PropTypes.number,
    level: PropTypes.string,
    message: PropTypes.any
  })
};

export default FulfillmentSummary;
