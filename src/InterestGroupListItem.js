import React, { Component } from 'react';
import Interests from './sample-data/Interests';
import InterestList from './InterestList';

class InterestGroupListItem extends Component {
  interestsForGroup (interestGroupId) {
    return Interests
      .getAll()
      .filter((interest) => interest.interestGroupId === interestGroupId);
  }

  render() {
    return (
      <li>
        <h1>
          {this.props.interestGroup.name}
        </h1>
        <InterestList
          interests={this.interestsForGroup(this.props.interestGroup.id)}>
        </InterestList>
      </li>
    );
  }
}

export default InterestGroupListItem;
