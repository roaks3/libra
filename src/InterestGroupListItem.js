import React, { PropTypes } from 'react';
import InterestListForGroup from './InterestListForGroup';

const InterestGroupListItem = ({ interestGroup }) => {
  return (
    <li>
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
