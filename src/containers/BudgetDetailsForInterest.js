import { connect } from 'react-redux';
import { getInterestEventsForInterest } from '../store/InterestEvent/selectors';
import BudgetDetails from '../components/BudgetDetails';

const mapStateToProps = (state, ownProps) => ({
  interestEvents: getInterestEventsForInterest(state, ownProps)
});

const BudgetDetailsForInterest = connect(
  mapStateToProps
)(BudgetDetails);

export default BudgetDetailsForInterest;
