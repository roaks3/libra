import { connect } from 'react-redux';
import { getInterestEventsForInterestGroup, getAllInterestEvents } from '../store/InterestEvent/selectors';
import AnalyticsDetails from '../components/AnalyticsDetails';

const mapStateToProps = (state, ownProps) => ({
  interestEvents: getInterestEventsForInterestGroup(state, ownProps),
  allInterestEvents: getAllInterestEvents(state, ownProps)
});

const AnalyticsDetailsForInterestGroup = connect(
  mapStateToProps
)(AnalyticsDetails);

export default AnalyticsDetailsForInterestGroup;
