import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducer.js';

export default history => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, routerMiddleware(history))
  );
};
