import { UPDATE_DELETE_SUCCESS } from '../types';

const initialState = {
  data: null,
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DELETE_SUCCESS:
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
