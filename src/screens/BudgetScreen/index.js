import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DaySelect from '../../components/DaySelect';
import Header from '../../components/Header';
import BudgetInterestGroupList from '../../components/BudgetInterestGroupList';
import { fetchInterestGroups } from '../../store/InterestGroup/actions';
import { fetchInterests } from '../../store/Interest/actions';
import {
  fetchInterestEvents,
  incrementDefautInterestEventCompletedOn
} from '../../store/InterestEvent/actions';

class BudgetScreen extends Component {
  static propTypes = {
    successMessage: PropTypes.string,
    fetchInterestGroups: PropTypes.func.isRequired,
    fetchInterests: PropTypes.func.isRequired,
    fetchInterestEvents: PropTypes.func.isRequired,
    interestGroups: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  };

  componentWillMount() {
    this.props.fetchInterestGroups();
    this.props.fetchInterests();
    this.props.fetchInterestEvents();
  }

  render() {
    return (
      <section>
        <Header />
        {this.props.defautInterestEventCompletedOn &&
          <DaySelect
            date={this.props.defautInterestEventCompletedOn}
            onIncrementDay={this.props.incrementDefautInterestEventCompletedOn}
          />}
        <p>
          {this.props.successMessage}
        </p>
        <BudgetInterestGroupList interestGroups={this.props.interestGroups} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  defautInterestEventCompletedOn: state.interestEvent
    .defautInterestEventCompletedOn,
  successMessage: state.interestEvent.successMessage,
  interestGroups: state.interestGroups
});

export default connect(mapStateToProps, {
  fetchInterestGroups,
  fetchInterests,
  fetchInterestEvents,
  incrementDefautInterestEventCompletedOn
})(BudgetScreen);
