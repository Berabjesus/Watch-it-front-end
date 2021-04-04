import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import userReducer from './userReducer';
import createReducer from './createReducer';

const rootReducer = combineReducers({
  session: loginReducer,
  userWatchList: userReducer,
  create: createReducer,
});

export default rootReducer;
