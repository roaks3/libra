import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { logInterestEvent } from '../store/InterestEvent/actions';
import InterestEventForm from './InterestEventForm';
import BudgetDetailsForInterest from '../containers/BudgetDetailsForInterest';
import './InterestListItem.css';

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
    this.props.logInterestEvent({ ...interestEvent, interestId: this.props.interest.id }, this.props.interest);
    // TODO: Only close only on success
    this.setState({ visible: false });
  }

  render () {
    const { interest, defautInterestEventCompletedAt } = this.props;

    let form;
    if (this.state.visible) {
      form = (
        <InterestEventForm
          defaultCompletedAt={defautInterestEventCompletedAt}
          onSubmit={this.logEvent}
        />
      )
    }

    return (
      <li className="interest-list-item">
        <header>
          <button className="btn-weak" onClick={this.handleClick}>
            +
          </button>
          <h2>
            {interest.name}
          </h2>
          <BudgetDetailsForInterest
            interest={interest}
          />
        </header>
        {form}
      </li>
    );
  }

}

const mapStateToProps = state => ({
  defautInterestEventCompletedAt: state.interestEvents.defautInterestEventCompletedAt
});

export default connect(
  mapStateToProps,
  {
    logInterestEvent
  }
)(InterestListItem);
