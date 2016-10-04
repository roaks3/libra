import React from 'react';
import InterestGroupListItem from './InterestGroupListItem';

const InterestGroupList = ({ interestGroups }) => {
  return (
    <ul className="interest-group-list">
      {interestGroups.map((interestGroup) => {
        return (
          <InterestGroupListItem
            key={interestGroup.id}
            interestGroup={interestGroup}
          />
        );
      })}
    </ul>
  );
};

export default InterestGroupList;
