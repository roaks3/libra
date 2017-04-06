import { connect } from 'react-redux';
import { getInterestEventsForInterestGroup } from '../store/InterestEvent/selectors';
import BudgetDetails from '../components/BudgetDetails';

const mapStateToProps = (state, ownProps) => ({
  interestEvents: getInterestEventsForInterestGroup(state, ownProps)
});

const BudgetDetailsForInterestGroup = connect(
  mapStateToProps
)(BudgetDetails);

export default BudgetDetailsForInterestGroup;
