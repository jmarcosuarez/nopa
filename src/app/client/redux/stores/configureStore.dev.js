/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
/* eslint-disable import/no-extraneous-dependencies */
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import DevTools from '../../DevTools';

const router = routerMiddleware(browserHistory);
// const createStoreWithMiddleware = applyMiddleware(thunk, router)(createStore);

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk, router),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
