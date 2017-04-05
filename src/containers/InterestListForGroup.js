import { connect } from 'react-redux';
import { selectInterestsForGroup } from '../store/Interest/selectors';
import InterestList from '../components/InterestList';

const mapStateToProps = (state, ownProps) => ({
  interests: selectInterestsForGroup(state, ownProps)
});

const InterestListForGroup = connect(
  mapStateToProps
)(InterestList);

export default InterestListForGroup;
