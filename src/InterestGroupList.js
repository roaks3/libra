import React, { Component } from 'react';
import InterestGroupListItem from './InterestGroupListItem';

class InterestGroupList extends Component {

  render() {
    const { interestGroups } = this.props;

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
  }

}

export default InterestGroupList;
