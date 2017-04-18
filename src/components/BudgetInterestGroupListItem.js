import React, { PropTypes } from 'react';
import BudgetDetailsForInterestGroup from '../containers/BudgetDetailsForInterestGroup';
import BudgetInterestListForGroup from '../containers/BudgetInterestListForGroup';
import './BudgetInterestGroupListItem.css';

const BudgetInterestGroupListItem = ({ interestGroup }) => {
  return (
    <li className="lb-BudgetInterestGroupListItem">
      <header>
        <h1>
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
