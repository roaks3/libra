import React, { Component } from 'react';

class InterestListItem extends Component {
  render() {
    return (
      <li>
        {this.props.interest.name}
      </li>
    );
  }
}

export default InterestListItem;
