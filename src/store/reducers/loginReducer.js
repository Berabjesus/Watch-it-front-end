import * as loginTypes from '../types/loginTypes';

const initialState = {
  isLoggedIn: false,
  username: '',
  token: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
        token: action.payload.token,
        error: null,
      };
    case loginTypes.LOGOUT:
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
