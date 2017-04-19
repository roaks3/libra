import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { logInterestEvent } from '../store/InterestEvent/actions';
import InterestEventForm from './InterestEventForm';
import BudgetDetailsForInterest from '../containers/BudgetDetailsForInterest';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#eeeeee',
    borderTop: '1px solid #fff',
    padding: '10px 30px'
  },

  header: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap'
  },

  name: {
    fontSize: '14px',
    paddingLeft: '10px',
    width: '180px'
  },

  details: {
    opacity: 0.6
  }
});

// TODO: Consider breaking this up into a component and container, because
// I keep getting confused by where to find thigs with this
class BudgetInterestListItem extends Component {
  static propTypes = {
    interest: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  };

  state = {
    visible: false
  };

  handleClick = e => {
    this.setState({ visible: !this.state.visible });
  };

  logEvent = interestEvent => {
    this.props.logInterestEvent(
      { ...interestEvent, interestId: this.props.interest.id },
      this.props.interest
    );
    // TODO: Only close only on success
    this.setState({ visible: false });
  };

  render() {
    const { interest, defautInterestEventCompletedAt } = this.props;

    let form;
    if (this.state.visible) {
      form = (
        <InterestEventForm
          defaultCompletedAt={defautInterestEventCompletedAt}
          onSubmit={this.logEvent}
        />
      );
    }

    return (
      <li className={css(styles.listItem)}>
        <header className={css(styles.header)}>
          <button className="btn-weak" onClick={this.handleClick}>
            +
          </button>
          <h2 className={css(styles.name)}>
            {interest.name}
          </h2>
          <div className={css(styles.details)}>
            <BudgetDetailsForInterest interest={interest} numDays={28} />
          </div>
        </header>
        {form}
      </li>
    );
  }
}

const mapStateToProps = state => ({
  defautInterestEventCompletedAt: state.interestEvent
    .defautInterestEventCompletedAt
});

export default connect(mapStateToProps, {
  logInterestEvent
})(BudgetInterestListItem);
