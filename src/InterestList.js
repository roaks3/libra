import React, { Component } from 'react';
import InterestListItem from './InterestListItem';

class InterestList extends Component {

  render() {
    const { interests } = this.props;

    return (
      <ul>
        {interests.map((interest) => {
          return (
            <InterestListItem
              key={interest.id}
              interest={interest}
            />
          );
        })}
      </ul>
    );
  }

}

export default InterestList;
