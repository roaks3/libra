import React, { Component } from 'react';
import InterestListItem from './InterestListItem';

class InterestList extends Component {
  render() {
    return (
      <ul>
        {this.props.interests.map((interest) => {
          return (
            <InterestListItem
              key={interest.id}
              interest={interest}>
            </InterestListItem>
          );
        })}
      </ul>
    );
  }
}

export default InterestList;
