import React, { PropTypes } from 'react';
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

InterestGroupList.propTypes = {
  interestGroups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default InterestGroupList;
