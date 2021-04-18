import * as viewTypes from '../types/viewTypes';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case viewTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case viewTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case viewTypes.EDIT_FAIL:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    case viewTypes.DELETE_FAIL:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
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
