//export count from './count'

import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux'

import count from './count';

const rootReducer = combineReducers({
  routing: routeReducer,
  count
});

export default rootReducer;
