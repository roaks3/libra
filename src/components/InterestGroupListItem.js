import React, { PropTypes } from 'react';
import InterestListForGroup from '../containers/InterestListForGroup';
import './InterestGroupListItem.css';

const InterestGroupListItem = ({ interestGroup }) => {
  return (
    <li className="interest-group-list-item">
      <h1>
        {interestGroup.name}
      </h1>
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
