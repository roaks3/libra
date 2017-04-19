import React, { PropTypes } from 'react';
import AnalyticsDetailsForInterestGroup from '../containers/AnalyticsDetailsForInterestGroup';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#dddddd',
    margin: '10px 0'
  },

  header: {
    alignItems: 'center',
    display: 'flex'
  },

  name: {
    fontSize: '14px',
    padding: '15px 30px',
    width: '240px'
  }
});

const AnalyticsInterestGroupListItem = ({ interestGroup }) => {
  return (
    <li className={css(styles.listItem)}>
      <header className={css(styles.header)}>
        <h1 className={css(styles.name)}>
          {interestGroup.name}
        </h1>
        <AnalyticsDetailsForInterestGroup
          interestGroup={interestGroup}
          numDays={42}
        />
      </header>
    </li>
  );
};

AnalyticsInterestGroupListItem.propTypes = {
  interestGroup: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default AnalyticsInterestGroupListItem;
