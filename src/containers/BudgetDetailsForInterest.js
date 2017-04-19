import { connect } from 'react-redux';
import {
  getInterestEventsForInterestInRange,
  getStartOfActivityRange,
  getEndOfActivityRange
} from '../store/InterestEvent/selectors';
import BudgetDetails from '../components/BudgetDetails';

const mapStateToProps = (state, ownProps) => ({
  interestEvents: getInterestEventsForInterestInRange(state, ownProps),
  startAt: getStartOfActivityRange(state, ownProps),
  endAt: getEndOfActivityRange(state, ownProps)
});

const BudgetDetailsForInterest = connect(mapStateToProps)(BudgetDetails);

export default BudgetDetailsForInterest;
