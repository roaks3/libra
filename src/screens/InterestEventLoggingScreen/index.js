import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import InterestGroupList from '../../components/InterestGroupList';
import { fetchInterestGroups } from '../../store/InterestGroup/actions';
import { fetchInterests } from '../../store/Interest/actions';
import { fetchInterestEvents } from '../../store/InterestEvent/actions';

class InterestEventLoggingScreen extends Component {
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
        <p>
          {this.props.successMessage}
        </p>
        <InterestGroupList
          interestGroups={this.props.interestGroups}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  successMessage: state.interestEvents.successMessage,
  interestGroups: state.interestGroups
});

export default connect(
  mapStateToProps,
  {
    fetchInterestGroups,
    fetchInterests,
    fetchInterestEvents
  }
)(InterestEventLoggingScreen);
