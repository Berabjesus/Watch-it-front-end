import { SET_LOADING, SET_SUCCESS, SET_ERRORS } from '../types';

const initialState = {
  loading: false,
  error: null,
};

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_SUCCESS:
      return {
        loading: false,
        error: null,
      };
    case SET_ERRORS:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default statusReducer;
