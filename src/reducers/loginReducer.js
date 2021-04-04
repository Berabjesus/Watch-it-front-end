import * as loginTypes from '../types/loginTypes';

const initialState = {
  loading: false,
  isLoggedIn: false,
  username: '',
  token: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        username: action.payload.username,
        token: action.payload.token,
        error: null,
      };
    case loginTypes.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default: return state;
  }
};

export default loginReducer;
