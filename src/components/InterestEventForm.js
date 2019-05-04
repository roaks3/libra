import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  form: {
    borderTop: '1px solid #fff',
    marginTop: '10px'
  }
});

class InterestEventForm extends Component {
  static propTypes = {
    defaultCompletedOn: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    completedOn: moment(this.props.defaultCompletedOn)
      .utc()
      .format('YYYY-MM-DD'),
    duration: 1,
    fulfillment: 1
  };

  handleCompletedOnChange = e => {
    this.setState({ completedOn: e.target.value });
  };

  handleDurationChange = e => {
    this.setState({ duration: parseInt(e.target.value, 10) });
  };

  handleFulfillmentChange = e => {
    this.setState({ fulfillment: parseInt(e.target.value, 10) });
  };

  handleSubmit = e => {
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className={'basic-form ' + css(styles.form)}>
        <fieldset>
          <label>
            Completed at
          </label>
          <input
            type="date"
            value={this.state.completedOn}
            onChange={this.handleCompletedOnChange}
            placeholder="YYYY-MM-DD"
          />
        </fieldset>
        <fieldset>
          <label>
            Duration (hrs)
          </label>
          <input
            type="number"
            value={this.state.duration}
            onChange={this.handleDurationChange}
          />
        </fieldset>
        <fieldset>
          <label>
            Fulfillment
          </label>
          <input
            type="number"
            value={this.state.fulfillment}
            onChange={this.handleFulfillmentChange}
          />
        </fieldset>
        <button
          className="btn-primary"
          type="button"
          onClick={this.handleSubmit}
        >
          Log Event
        </button>
      </form>
    );
  }
}

export default InterestEventForm;
