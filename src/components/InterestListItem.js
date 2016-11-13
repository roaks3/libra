import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { logInterestEvent } from '../actions/interestEvents';
import InterestEventForm from './InterestEventForm';

class InterestListItem extends Component {

  static propTypes = {
    interest: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }

  state = {
    visible: false
  }

  handleClick = (e) => {
    this.setState({ visible: !this.state.visible });
  }

  logEvent = (interestEvent) => {
    this.props.logInterestEvent({ ...interestEvent, interestId: this.props.interest.id });
    // TODO: Only close only on success
    this.setState({ visible: false });
  }

  render () {
    const { interest } = this.props;

    let form;
    if (this.state.visible) {
      form = <InterestEventForm onSubmit={this.logEvent} />
    }

    return (
      <li className="interest-list-item">
        <button onClick={this.handleClick}>
          +
        </button>
        <span>
          {interest.name}
        </span>
        {form}
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
