import React from 'react';
import PropTypes from 'prop-types';
import AnalyticsInterestGroupListItem from './AnalyticsInterestGroupListItem';

const AnalyticsInterestGroupList = ({ interestGroups }) => {
  return (
    <ul>
      {interestGroups.map(interestGroup => {
        return (
          <AnalyticsInterestGroupListItem
            key={interestGroup.id}
            interestGroup={interestGroup}
          />
        );
      })}
    </ul>
  );
};

AnalyticsInterestGroupList.propTypes = {
  interestGroups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default AnalyticsInterestGroupList;
