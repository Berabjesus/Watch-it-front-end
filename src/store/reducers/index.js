import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import userReducer from './userReducer';
import createReducer from './createReducer';
import viewReducer from './viewReducer';
import statusReducer from './statusReducer';

const rootReducer = combineReducers({
  session: loginReducer,
  userWatchList: userReducer,
  create: createReducer,
  view: viewReducer,
  status: statusReducer,
});

export default rootReducer;
