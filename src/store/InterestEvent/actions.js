import { resourceUrl, options } from '../../api';

const RESOURCE_NAME = 'interestEvents';

export const REQUEST_INTEREST_EVENTS = 'REQUEST_INTEREST_EVENTS';
export const RECEIVE_INTEREST_EVENTS = 'RECEIVE_INTEREST_EVENTS';
export const LOG_INTEREST_EVENT_REQUEST = 'LOG_INTEREST_EVENT_REQUEST';
export const LOG_INTEREST_EVENT_SUCCESS = 'LOG_INTEREST_EVENT_SUCCESS';
export const INCREMENT_DEFAULT_INTEREST_EVENT_COMPLETED_AT =
  'INCREMENT_DEFAULT_INTEREST_EVENT_COMPLETED_AT';

export const requestInterestEvents = () => ({
  type: REQUEST_INTEREST_EVENTS
});

export const receiveInterestEvents = interestEvents => ({
  type: RECEIVE_INTEREST_EVENTS,
  interestEvents
});

export const fetchInterestEvents = () => dispatch => {
  dispatch(requestInterestEvents());
  return fetch(resourceUrl(RESOURCE_NAME) + '&l=2000', options)
    .then(response => response.json())
    .then(json =>
      dispatch(
        receiveInterestEvents(
          json.map(post => Object.assign(post, { id: post._id.$oid }))
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
    body: JSON.stringify(interestEvent)
  }).then(() => {
    dispatch(logInterestEventSuccess(interestEvent, interest));
  });
};

export const incrementDefautInterestEventCompletedAt = () => ({
  type: INCREMENT_DEFAULT_INTEREST_EVENT_COMPLETED_AT
});
