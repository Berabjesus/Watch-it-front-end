import * as loginTypes from '../types/loginTypes';

const initialState = {
  loading: false,
  isLoggedIn: false,
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
        loggedIn: true,
        token: action.payload.token,
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
