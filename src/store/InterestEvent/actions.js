import * as _ from 'lodash';
import { resourceUrl, options } from '../../api';

const RESOURCE_NAME = 'interest_events';

export const REQUEST_INTEREST_EVENTS = 'REQUEST_INTEREST_EVENTS';
export const RECEIVE_INTEREST_EVENTS = 'RECEIVE_INTEREST_EVENTS';
export const LOG_INTEREST_EVENT_REQUEST = 'LOG_INTEREST_EVENT_REQUEST';
export const LOG_INTEREST_EVENT_SUCCESS = 'LOG_INTEREST_EVENT_SUCCESS';
export const INCREMENT_DEFAULT_INTEREST_EVENT_COMPLETED_ON =
  'INCREMENT_DEFAULT_INTEREST_EVENT_COMPLETED_ON';

export const requestInterestEvents = () => ({
  type: REQUEST_INTEREST_EVENTS
});

export const receiveInterestEvents = interestEvents => ({
  type: RECEIVE_INTEREST_EVENTS,
  interestEvents
});

export const fetchInterestEvents = () => dispatch => {
  dispatch(requestInterestEvents());
  return fetch(resourceUrl(RESOURCE_NAME), options)
    .then(response => response.json())
    .then(json =>
      dispatch(
        receiveInterestEvents(
          json.map(result => _.mapKeys(result, (val, key) => _.camelCase(key)))
        )
      )
    );
};

const logInterestEventRequest = () => ({
  type: LOG_INTEREST_EVENT_REQUEST
});

const logInterestEventSuccess = (interestEvent, interest) => ({
  type: LOG_INTEREST_EVENT_SUCCESS,
  interestEvent,
  interest
});

export const logInterestEvent = (interestEvent, interest) => dispatch => {
  dispatch(logInterestEventRequest());
  return fetch(resourceUrl(RESOURCE_NAME), {
    ...options,
    method: 'POST',
    body: JSON.stringify(_.mapKeys(interestEvent, (val, key) => _.snakeCase(key)))
  }).then(() => {
    dispatch(logInterestEventSuccess(interestEvent, interest));
  });
};

export const incrementDefautInterestEventCompletedOn = () => ({
  type: INCREMENT_DEFAULT_INTEREST_EVENT_COMPLETED_ON
});
