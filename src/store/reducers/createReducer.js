import * as createTypes from '../types/createTypes';

const initialState = {
  created: false,
};

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case createTypes.CREATE_SUCCESS:
      return {
        created: true,
      };
    default: return state;
  }
};

export default createReducer;
