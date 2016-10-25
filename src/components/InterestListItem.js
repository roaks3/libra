import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { logInterestEvent } from '../actions/interestEvents';

class InterestListItem extends Component {

  static propTypes = {
    interest: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  };

  handleClick = () => {
    this.props.logInterestEvent(this.props.interest.id);
  }

  render () {
    const { interest } = this.props;
    return (
      <li onClick={this.handleClick}>
        {interest.name}
      </li>
    );
  }

}

export default connect(
  null,
  {
    logInterestEvent
  }
)(InterestListItem);
