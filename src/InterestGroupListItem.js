import React from 'react';
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

export default InterestGroupListItem;
