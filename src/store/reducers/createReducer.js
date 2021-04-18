import * as createTypes from '../types/createTypes';

const initialState = {
  sending: false,
  sent: false,
  error: null,
};

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case createTypes.CREATE_REQUEST:
      return {
        ...state,
        sending: true,
      };
    case createTypes.CREATE_SUCCESS:
      return {
        ...state,
        sending: false,
        sent: true,
        error: false,
      };
    case createTypes.CREATE_FAIL:
      return {
        ...state,
        sending: false,
        error: action.payload,
      };
    default: return state;
  }
};

export default createReducer;
