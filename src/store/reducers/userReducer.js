import { USER_DATA_FETCH_SUCCESS } from '../types';

const initialState = {
  data: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA_FETCH_SUCCESS:
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
