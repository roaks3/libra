import { resourceUrl, options } from '../api';
import {
  REQUEST_INTERESTS, RECEIVE_INTERESTS
} from './actionTypes';

const RESOURCE_NAME = 'interests';

export const requestInterests = () => ({
  type: REQUEST_INTERESTS
});

export const receiveInterests = (interests) => ({
  type: RECEIVE_INTERESTS,
  interests
});

export const fetchInterests = () => dispatch => {
  dispatch(requestInterests());
  return fetch(resourceUrl(RESOURCE_NAME), options)
    .then(response => response.json())
    .then(json => dispatch(receiveInterests(json.map(post => Object.assign(post, {id: post._id.$oid})))));
};
