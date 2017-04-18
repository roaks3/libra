import React, { PropTypes } from 'react';
import AnalyticsDetailsForInterestGroup from '../containers/AnalyticsDetailsForInterestGroup';
import './AnalyticsInterestGroupListItem.css';

const AnalyticsInterestGroupListItem = ({ interestGroup }) => {
  return (
    <li className="lb-AnalyticsInterestGroupListItem">
      <header>
        <h1>
          {interestGroup.name}
        </h1>
        <AnalyticsDetailsForInterestGroup
          interestGroup={interestGroup}
          numDays={42}
        />
      </header>
    </li>
  );
};

AnalyticsInterestGroupListItem.propTypes = {
  interestGroup: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default AnalyticsInterestGroupListItem;
