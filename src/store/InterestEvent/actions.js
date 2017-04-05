import { resourceUrl, options } from '../../api';

const RESOURCE_NAME = 'interestEvents';

export const REQUEST_INTEREST_EVENTS = 'REQUEST_INTEREST_EVENTS';
export const RECEIVE_INTEREST_EVENTS = 'RECEIVE_INTEREST_EVENTS';
export const LOG_INTEREST_EVENT_REQUEST = 'LOG_INTEREST_EVENT_REQUEST';
export const LOG_INTEREST_EVENT_SUCCESS = 'LOG_INTEREST_EVENT_SUCCESS';

export const requestInterestEvents = () => ({
  type: REQUEST_INTEREST_EVENTS
});

export const receiveInterestEvents = (interestEvents) => ({
  type: RECEIVE_INTEREST_EVENTS,
  interestEvents
});

export const fetchInterestEvents = () => dispatch => {
  dispatch(requestInterestEvents());
  return fetch(resourceUrl(RESOURCE_NAME), options)
    .then(response => response.json())
    .then(json => dispatch(receiveInterestEvents(json.map(post => Object.assign(post, {id: post._id.$oid})))));
};

const logInterestEventRequest = () => ({
  type: LOG_INTEREST_EVENT_REQUEST
});

const logInterestEventSuccess = (interestEvent) => ({
  type: LOG_INTEREST_EVENT_SUCCESS,
  interestEvent
});

export const logInterestEvent = (interestEvent) => dispatch => {
  dispatch(logInterestEventRequest());
  return fetch(resourceUrl(RESOURCE_NAME), {
      ...options,
      method: 'POST',
      body: JSON.stringify(interestEvent)
    })
    .then(() => {
      dispatch(logInterestEventSuccess(interestEvent));
    });
};
