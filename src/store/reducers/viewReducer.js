import * as viewTypes from '../types/viewTypes';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case viewTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case 'RESET':
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };
    default: return state;
  }
};

export default viewReducer;
