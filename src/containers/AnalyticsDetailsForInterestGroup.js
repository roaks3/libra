import { connect } from 'react-redux';
import {
  getInterestEventsForInterestGroupInRange,
  getInterestEventsInRange,
  getStartOfActivityRange,
  getEndOfActivityRange
} from '../store/InterestEvent/selectors';
import AnalyticsDetails from '../components/AnalyticsDetails';

const mapStateToProps = (state, ownProps) => ({
  interestEvents: getInterestEventsForInterestGroupInRange(state, ownProps),
  allInterestEvents: getInterestEventsInRange(state, ownProps),
  startAt: getStartOfActivityRange(state, ownProps),
  endAt: getEndOfActivityRange(state, ownProps)
});

const AnalyticsDetailsForInterestGroup = connect(mapStateToProps)(
  AnalyticsDetails
);

export default AnalyticsDetailsForInterestGroup;
