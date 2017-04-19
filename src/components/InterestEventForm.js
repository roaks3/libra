import React, { PropTypes, Component } from 'react';
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
    defaultCompletedAt: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    completedAt: moment(this.props.defaultCompletedAt).utc().format('YYYY-MM-DD'),
    duration: 1,
    fulfillment: 1
  }

  handleCompletedAtChange = e => {
    this.setState({ ...this.state, completedAt: e.target.value });
  }

  handleDurationChange = e => {
    this.setState({ ...this.state, duration: parseInt(e.target.value, 10) });
  }

  handleFulfillmentChange = e => {
    this.setState({ ...this.state, fulfillment: parseInt(e.target.value, 10) });
  }

  handleSubmit = e => {
    this.props.onSubmit({
      ...this.state,
      completedAt: moment(this.state.completedAt, 'YYYY-MM-DD').utc().format()
    });
  }

  render () {
    return (
      <form className={'basic-form ' + css(styles.form)}>
        <fieldset>
          <label>
            Completed at
          </label>
          <input
            type="date"
            value={this.state.completedAt}
            onChange={this.handleCompletedAtChange}
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
          onClick={this.handleSubmit}>
          Log Event
        </button>
      </form>
    );
  }
}

export default InterestEventForm;
