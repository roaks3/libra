import * as _ from 'lodash';
import { resourceUrl, options } from '../../api';

const RESOURCE_NAME = 'interests';

export const REQUEST_INTERESTS = 'REQUEST_INTERESTS';
export const RECEIVE_INTERESTS = 'RECEIVE_INTERESTS';

export const requestInterests = () => ({
  type: REQUEST_INTERESTS
});

export const receiveInterests = interests => ({
  type: RECEIVE_INTERESTS,
  interests
});

export const fetchInterests = () => dispatch => {
  dispatch(requestInterests());
  return fetch(resourceUrl(RESOURCE_NAME), options)
    .then(response => response.json())
    .then(json =>
      dispatch(
        receiveInterests(
          json.map(result => _.mapKeys(result, (val, key) => _.camelCase(key)))
        )
      )
    );
};
