import { resourceUrl, options } from '../../api';

const RESOURCE_NAME = 'interestGroups';

export const REQUEST_INTEREST_GROUPS = 'REQUEST_INTEREST_GROUPS';
export const RECEIVE_INTEREST_GROUPS = 'RECEIVE_INTEREST_GROUPS';

export const requestInterestGroups = () => ({
  type: REQUEST_INTEREST_GROUPS
});

export const receiveInterestGroups = interestGroups => ({
  type: RECEIVE_INTEREST_GROUPS,
  interestGroups
});

export const fetchInterestGroups = () => dispatch => {
  dispatch(requestInterestGroups());
  return fetch(resourceUrl(RESOURCE_NAME), options)
    .then(response => response.json())
    .then(json => dispatch(receiveInterestGroups(json.map(post => Object.assign(post, {id: post._id.$oid})))));
};
