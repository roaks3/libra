import React from 'react';
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

export default InterestList;
