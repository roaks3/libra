import { connect } from 'react-redux';
import { getInterestsForGroup } from '../store/Interest/selectors';
import BudgetInterestList from '../components/BudgetInterestList';

const mapStateToProps = (state, ownProps) => ({
  interests: getInterestsForGroup(state, ownProps)
});

const BudgetInterestListForGroup = connect(mapStateToProps)(BudgetInterestList);

export default BudgetInterestListForGroup;
