import { connect } from 'react-redux'
import InterestGroupList from '../components/InterestGroupList'
import React, { Component, PropTypes } from 'react';
import { fetchInterestGroups } from '../actions/interestGroups';
import { fetchInterests } from '../actions/interests';

class AllInterestGroupList extends Component {
  static propTypes = {
    fetchInterestGroups: PropTypes.func.isRequired,
    fetchInterests: PropTypes.func.isRequired,
    interestGroups: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired).isRequired
  }

  componentWillMount() {
    this.props.fetchInterestGroups();
    this.props.fetchInterests();
  }

  render () {
    return (
      <InterestGroupList
        interestGroups={this.props.interestGroups}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  interestGroups: state.interestGroups
})

export default connect(
  mapStateToProps,
  {
  	fetchInterestGroups,
  	fetchInterests
  }
)(AllInterestGroupList);
