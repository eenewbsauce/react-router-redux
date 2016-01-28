// import { createDevTools } from 'redux-devtools'
// import LogMonitor from 'redux-devtools-log-monitor'
// import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
//import createHistory from 'history/lib/createHashHistory'
import { syncHistory, routeReducer } from 'react-router-redux'

// import * as reducers from '../reducers'
import { App, Home, Foo, Bar, DevTools } from '../components'
import configureStore from '../stores/configureStore';
//const history = createHistory()
//const middleware = syncHistory(browserHistory)

// const reducer = combineReducers({
//   ...reducers,
//   routing: routeReducer
// })

// const DevTools = createDevTools(
//   <DockMonitor toggleVisibilityKey="ctrl-h"
//                changePositionKey="ctrl-q">
//     <LogMonitor theme="tomorrow" />
//   </DockMonitor>
// )

// const finalCreateStore = compose(
//   applyMiddleware(thunkMiddleware),
//   applyMiddleware(middleware),
//   DevTools.instrument()
// )(createStore);

//const store = finalCreateStore(reducer)
const store = configureStore();

// if (module.hot) {
//   module.hot.accept('../reducers', () => {
//     const nextRootReducer = require('../reducers/index');
//     store.replaceReducer(nextRootReducer);
//   });
// }

// middleware.listenForReplays(store)

export default React.createClass({
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={browserHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={Home}/>
              <Route path="foo" component={Foo}/>
              <Route path="bar" component={Bar}/>
            </Route>
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  }
});
