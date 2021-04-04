import * as createTypes from '../types/createTypes';

export const creating = () => ({
  type: createTypes.CREATE_REQUEST,
});

export const createSuccess = () => ({
  type: createTypes.CREATE_SUCCESS,
});

export const createFail = (data) => ({
  type: createTypes.CREATE_FAIL,
  payload: data,
});

export const create = (data, token) => (dispatch) => {
  dispatch(creating());
  fetch('http://localhost:3000/api/v1/watchlists/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'Error') {
        throw new Error(data.message);
      }
      dispatch(createSuccess());
    })
    .catch((error) => {
      dispatch(createFail(error.message.split(',')));
    });
};
