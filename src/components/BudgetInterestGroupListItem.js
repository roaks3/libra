import React, { PropTypes } from 'react';
import BudgetDetailsForInterestGroup from '../containers/BudgetDetailsForInterestGroup';
import BudgetInterestListForGroup from '../containers/BudgetInterestListForGroup';
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

const BudgetInterestGroupListItem = ({ interestGroup }) => {
  return (
    <li className={css(styles.listItem)}>
      <header className={css(styles.header)}>
        <h1 className={css(styles.name)}>
          {interestGroup.name}
        </h1>
        <BudgetDetailsForInterestGroup
          interestGroup={interestGroup}
          numDays={28}
        />
      </header>
      <BudgetInterestListForGroup
        interestGroup={interestGroup}
      />
    </li>
  );
};

BudgetInterestGroupListItem.propTypes = {
  interestGroup: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default BudgetInterestGroupListItem;
