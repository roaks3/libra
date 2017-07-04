import { connect } from 'react-redux';
import {
  getInterestEventsInRange,
  getStartOfActivityRange,
  getEndOfActivityRange
} from '../store/InterestEvent/selectors';
import InterestEventLineChart from '../components/InterestEventLineChart';

const mapStateToProps = (state, ownProps) => ({
  interestEvents: getInterestEventsInRange(state, ownProps),
  startAt: getStartOfActivityRange(state, ownProps),
  endAt: getEndOfActivityRange(state, ownProps)
});

const InterestEventLineChartForAll = connect(mapStateToProps)(
  InterestEventLineChart
);

export default InterestEventLineChartForAll;
