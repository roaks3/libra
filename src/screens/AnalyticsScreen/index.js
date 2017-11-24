import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import FeedbackListForAll from '../../containers/FeedbackListForAll';
import AnalyticsInterestGroupList
  from '../../components/AnalyticsInterestGroupList';
import { fetchInterestGroups } from '../../store/InterestGroup/actions';
import { fetchInterests } from '../../store/Interest/actions';
import { fetchInterestEvents } from '../../store/InterestEvent/actions';

class AnalyticsScreen extends Component {
  static propTypes = {
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
        <FeedbackListForAll numDays={42} />
        <AnalyticsInterestGroupList
          interestGroups={this.props.interestGroups}
        />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  interestGroups: state.interestGroups
});

export default connect(mapStateToProps, {
  fetchInterestGroups,
  fetchInterests,
  fetchInterestEvents
})(AnalyticsScreen);
