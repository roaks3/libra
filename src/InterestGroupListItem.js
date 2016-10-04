import React, { Component } from 'react';
import InterestListForGroup from './InterestListForGroup';

class InterestGroupListItem extends Component {

  render() {
    const { interestGroup } = this.props;

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
  }

}

export default InterestGroupListItem;
