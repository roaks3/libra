import React, { PropTypes } from 'react';
import InterestListItem from './InterestListItem';

const InterestList = ({ interests }) => {
  return (
    <ul>
      {interests.map((interest) => {
        return (
          <InterestListItem
            key={interest.id}
            interest={interest}
          />
        );
      })}
    </ul>
  );
};

InterestList.propTypes = {
  interests: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default InterestList;
