import { SET_LOADING, SET_SUCCESS, SET_ERRORS } from '../types/statusTypes';

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
        ...state,
        loading: false,
      };
    case SET_ERRORS:
      console.log(action);
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default statusReducer;
