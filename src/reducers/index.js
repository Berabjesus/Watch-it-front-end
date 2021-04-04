import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  session: loginReducer,
  userWatchList: userReducer,
});

export default rootReducer;
