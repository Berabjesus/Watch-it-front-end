import * as userTypes from '../types/userTypes';

const initialState = {
  data: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USER_DATA_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    default: return state;
  }
};

export default userReducer;
