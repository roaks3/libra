import { connect } from 'react-redux'
import InterestList from './InterestList'

const getInterestsForGroup = (interestGroup, interests) => {
  return interests.filter((interest) => interest.interestGroupId === interestGroup.id);
};

const mapStateToProps = (state, ownProps) => ({
  interests: getInterestsForGroup(ownProps.interestGroup, state.interests)
});

const InterestListForGroup = connect(
  mapStateToProps
)(InterestList);

export default InterestListForGroup;
