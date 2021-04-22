import { CREATE_SUCCESS } from '../types';

const initialState = {
  created: false,
};

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SUCCESS:
      return {
        created: true,
      };
    default: return state;
  }
};

export default createReducer;
