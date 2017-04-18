import { connect } from 'react-redux';
import {
  getInterestEventsForInterestGroupInRange,
  getStartOfActivityRange, getEndOfActivityRange
} from '../store/InterestEvent/selectors';
import BudgetDetails from '../components/BudgetDetails';

const mapStateToProps = (state, ownProps) => ({
  interestEvents: getInterestEventsForInterestGroupInRange(state, ownProps),
  startAt: getStartOfActivityRange(state, ownProps),
  endAt: getEndOfActivityRange(state, ownProps)
});

const BudgetDetailsForInterestGroup = connect(
  mapStateToProps
)(BudgetDetails);

export default BudgetDetailsForInterestGroup;
