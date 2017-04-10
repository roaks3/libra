import React, { PropTypes } from 'react';
import BudgetInterestGroupListItem from './BudgetInterestGroupListItem';

const BudgetInterestGroupList = ({ interestGroups }) => {
  return (
    <ul className="interest-group-list">
      {interestGroups.map(interestGroup => {
        return (
          <BudgetInterestGroupListItem
            key={interestGroup.id}
            interestGroup={interestGroup}
          />
        );
      })}
    </ul>
  );
};

BudgetInterestGroupList.propTypes = {
  interestGroups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default BudgetInterestGroupList;
