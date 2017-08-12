/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
/* eslint-disable import/no-extraneous-dependencies */
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

const router = routerMiddleware(browserHistory);

const enhancer = compose(
  // Middleware you want to use in production:
  applyMiddleware(thunk, router),
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
