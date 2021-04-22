import { LOGIN_SUCCESS, LOGOUT } from '../types';

const initialState = {
  isLoggedIn: false,
  username: '',
  token: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
        token: action.payload.token,
        error: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        username: '',
        token: null,
        error: null,
      };
    default: return state;
  }
};

export default loginReducer;
