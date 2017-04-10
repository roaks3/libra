import moment from 'moment';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BudgetInterestGroupList from '../../components/BudgetInterestGroupList';
import { fetchInterestGroups } from '../../store/InterestGroup/actions';
import { fetchInterests } from '../../store/Interest/actions';
import { fetchInterestEvents, incrementDefautInterestEventCompletedAt } from '../../store/InterestEvent/actions';

class BudgetScreen extends Component {
  static propTypes = {
    successMessage: PropTypes.string,
    fetchInterestGroups: PropTypes.func.isRequired,
    fetchInterests: PropTypes.func.isRequired,
    fetchInterestEvents: PropTypes.func.isRequired,
    interestGroups: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired).isRequired
  };

  componentWillMount() {
    this.props.fetchInterestGroups();
    this.props.fetchInterests();
    this.props.fetchInterestEvents();
  }

  render () {
    return (
      <section>
        {
          this.props.defautInterestEventCompletedAt && (
            <button onClick={this.props.incrementDefautInterestEventCompletedAt}>
              {moment(this.props.defautInterestEventCompletedAt).utc().format('ddd MM-DD')} - Next Day
            </button>
          )
        }
        <p>
          {this.props.successMessage}
        </p>
        <BudgetInterestGroupList
          interestGroups={this.props.interestGroups}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  defautInterestEventCompletedAt: state.interestEvent.defautInterestEventCompletedAt,
  successMessage: state.interestEvent.successMessage,
  interestGroups: state.interestGroups
});

export default connect(
  mapStateToProps,
  {
    fetchInterestGroups,
    fetchInterests,
    fetchInterestEvents,
    incrementDefautInterestEventCompletedAt
  }
)(BudgetScreen);
