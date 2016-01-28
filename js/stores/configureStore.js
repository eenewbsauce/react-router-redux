import React from 'react';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { syncHistory, routeReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'
const historySyncMiddleware = syncHistory(browserHistory);

import * as reducers from '../reducers'
import { DevTools } from '../components'

const reducer = combineReducers({
  ...reducers,
  routing: routeReducer
})

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  applyMiddleware(historySyncMiddleware),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  historySyncMiddleware.listenForReplays(store)

  return store;
}
