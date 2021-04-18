import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import userReducer from './userReducer';
import createReducer from './createWatchListReducer';
import updateAndDeleteReducer from './updateAndDeleteReducer';
import statusReducer from './statusReducer';

const rootReducer = combineReducers({
  session: loginReducer,
  userWatchList: userReducer,
  create: createReducer,
  view: updateAndDeleteReducer,
  status: statusReducer,
});

export default rootReducer;
