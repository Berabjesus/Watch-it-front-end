import * as userTypes from '../types/userTypes';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USER_DATA_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userTypes.USER_DATA_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case userTypes.USER_DATA_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default: return state;
  }
};

export default userReducer;
