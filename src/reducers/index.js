import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive'

import authReducers from './authReducers';
import muiReducers from './muiReducers';
import uwsReducers from './uwsReducers';

const cfReducers = combineReducers({
  browser: responsiveStateReducer,
  auth: authReducers,
  mui: muiReducers,
  uws: uwsReducers
})

export default cfReducers