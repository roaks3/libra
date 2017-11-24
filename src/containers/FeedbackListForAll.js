import { connect } from 'react-redux';
import {
  getFeedbackMessagesInRange
} from '../store/InterestEvent/selectors';
import FeedbackList from '../components/FeedbackList';

const mapStateToProps = (state, ownProps) => ({
  messages: getFeedbackMessagesInRange(state, ownProps)
});

const FeedbackListForAll = connect(mapStateToProps)(
  FeedbackList
);

export default FeedbackListForAll;
