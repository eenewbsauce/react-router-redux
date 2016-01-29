import React from 'react';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { syncHistory, routeReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'
const historySyncMiddleware = syncHistory(browserHistory);
import createLogger from 'redux-logger'

import rootReducer from '../reducers'
import { DevTools } from '../components'

const createStoreWithMiddleware = compose(
  //applyMiddleware(thunk, historySyncMiddleware, createLogger()),
  applyMiddleware(thunk, historySyncMiddleware),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    console.log('hit');
    module.hot.accept('../reducers', function() {
      console.log('hit inside');
     store.replaceReducer(require('../reducers').default);
   });
  }

  historySyncMiddleware.listenForReplays(store)

  return store;
}
