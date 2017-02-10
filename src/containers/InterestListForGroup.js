import { connect } from 'react-redux';
import { getInterestsForGroup } from '../store/Interest/selectors';
import InterestList from '../components/InterestList';

const mapStateToProps = (state, ownProps) => ({
  interests: getInterestsForGroup(state, ownProps)
});

const InterestListForGroup = connect(
  mapStateToProps
)(InterestList);

export default InterestListForGroup;
