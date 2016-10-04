import React, { PropTypes } from 'react';

const InterestListItem = ({ interest }) => {
  return (
    <li>
      {interest.name}
    </li>
  );
};

InterestListItem.propTypes = {
  interest: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default InterestListItem;
