import React from 'react';
import PropTypes from 'prop-types';
import BudgetInterestListItem from './BudgetInterestListItem';

const BudgetInterestList = ({ interests }) => {
  return (
    <ul>
      {interests.map(interest => {
        return <BudgetInterestListItem key={interest.id} interest={interest} />;
      })}
    </ul>
  );
};

BudgetInterestList.propTypes = {
  interests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default BudgetInterestList;
