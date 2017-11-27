import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  feedbackList: {
    margin: '30px 0'
  },

  message: {
    backgroundColor: '#bbeeee',
    padding: '15px 20px',
    fontSize: '12px'
  },

  warning: {
    color: '#856404',
    backgroundColor: '#fff3cd',
    border: '1px solid #ffeeba'
  },

  error: {
    color: '#721c24',
    backgroundColor: '#f8d7da',
    border: '1px solid #f5c6cb'
  }
});

const FeedbackList = ({ messages }) => {
  return (
    <ul className={css(styles.feedbackList)}>
      {messages &&
        messages.map((message, index) => {
          return (
            <li
              key={index}
              className={css(styles.message, styles[message.severity])}
            >
              {message.text}
            </li>
          );
        })}
    </ul>
  );
};

FeedbackList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      severity: PropTypes.string
    })
  )
};

export default FeedbackList;
