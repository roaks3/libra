import React, { Component } from 'react';
import InterestGroups from './sample-data/InterestGroups';
import InterestGroupListItem from './InterestGroupListItem';

class InterestGroupList extends Component {
  render() {
    return (
      <ul className="interest-group-list">
        {InterestGroups.getAll().map((interestGroup) => {
          return (
            <InterestGroupListItem
              key={interestGroup.id}
              interestGroup={interestGroup}>
            </InterestGroupListItem>
          );
        })}
      </ul>
    );
  }
}

export default InterestGroupList;
