import { resourceUrl, options } from '../../api';

const RESOURCE_NAME = 'interestEvents';

export const LOG_INTEREST_EVENT_REQUEST = 'LOG_INTEREST_EVENT_REQUEST';
export const LOG_INTEREST_EVENT_SUCCESS = 'LOG_INTEREST_EVENT_SUCCESS';

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
