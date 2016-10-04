import { connect } from 'react-redux'
import InterestGroupList from './InterestGroupList'

const mapStateToProps = (state) => ({
  interestGroups: state.interestGroups
})

const AllInterestGroupList = connect(
  mapStateToProps
)(InterestGroupList);

export default AllInterestGroupList;
