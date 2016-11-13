import React, { PropTypes, Component } from 'react';
import moment from 'moment';

class InterestEventForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    completedAt: moment().minutes(0).seconds(0).utc().format(),
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
      completedAt: moment(this.state.completedAt).utc().format()
    });
  }

  render () {
    return (
      <form className="interest-event-form">
        <fieldset>
          <label>
            Completed at
          </label>
          <input
            type="datetime-local"
            value={this.state.completedAt}
            onChange={this.handleCompletedAtChange}
            placeholder="YYYY-MM-DDTHH:mm:ssZ"
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
          type="button"
          onClick={this.handleSubmit}>
          Log Event
        </button>
      </form>
    );
  }
}

export default InterestEventForm;
