import { connect } from 'react-redux';
import { selectInterestEventsForInterest } from '../store/InterestEvent/selectors';
import BudgetDetails from '../components/BudgetDetails';

const mapStateToProps = (state, ownProps) => ({
  interestEvents: selectInterestEventsForInterest(state, ownProps)
});

const BudgetDetailsForInterest = connect(
  mapStateToProps
)(BudgetDetails);

export default BudgetDetailsForInterest;
