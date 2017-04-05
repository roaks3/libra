import React, { PropTypes } from 'react';
import BudgetDetailsForInterestGroup from '../containers/BudgetDetailsForInterestGroup';
import InterestListForGroup from '../containers/InterestListForGroup';
import './InterestGroupListItem.css';

const InterestGroupListItem = ({ interestGroup }) => {
  return (
    <li className="interest-group-list-item">
      <header>
        <h1>
          {interestGroup.name}
        </h1>
        <BudgetDetailsForInterestGroup
          interestGroup={interestGroup}
        />
      </header>
      <InterestListForGroup
        interestGroup={interestGroup}
      />
    </li>
  );
};

InterestGroupListItem.propTypes = {
  interestGroup: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default InterestGroupListItem;
