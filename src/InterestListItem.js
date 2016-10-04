import React, { Component } from 'react';

class InterestListItem extends Component {

  render() {
  	const { interest } = this.props;

    return (
      <li>
        {interest.name}
      </li>
    );
  }

}

export default InterestListItem;
