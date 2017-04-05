import { connect } from 'react-redux';
import { selectInterestEventsForInterestGroup } from '../store/InterestEvent/selectors';
import BudgetDetails from '../components/BudgetDetails';

const mapStateToProps = (state, ownProps) => ({
  interestEvents: selectInterestEventsForInterestGroup(state, ownProps)
});

const BudgetDetailsForInterestGroup = connect(
  mapStateToProps
)(BudgetDetails);

export default BudgetDetailsForInterestGroup;
