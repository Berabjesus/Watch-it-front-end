import * as createTypes from '../types/createTypes';

export const creating = () => ({
  type: createTypes.CREATE_REQUEST,
});

export const createSuccess = (data) => ({
  type: createTypes.CREATE_SUCCESS,
  payload: data,
});

export const createFail = (data) => ({
  type: createTypes.CREATE_FAIL,
  payload: data,
});

export const create = (data) => (dispatch) => {
  dispatch(creating());
  fetch('http://localhost:3000/api/v1/watchlists/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'Error') {
        throw new Error(data.message);
      }
      dispatch(createSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(createFail(error.message));
      return error;
    });
};
