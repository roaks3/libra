import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AllInterestGroupList from './AllInterestGroupList';

class InterestEventLoggingPage extends Component {
  static propTypes = {
    successMessage: PropTypes.string
  };

  render () {
    return (
      <section>
        <p>
          {this.props.successMessage}
        </p>
        <AllInterestGroupList />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  successMessage: state.successMessage
});

export default connect(
  mapStateToProps
)(InterestEventLoggingPage);
