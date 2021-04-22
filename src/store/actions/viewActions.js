import { UPDATE_DELETE_SUCCESS } from '../types';
import { setLoading, setSuccess, setErrors } from './statusAction';

const Success = (data) => ({
  type: UPDATE_DELETE_SUCCESS,
  payload: data,
});

export const reset = () => ({
  type: 'RESET',
});

export const update = (id, newContent, token) => (dispatch) => {
  dispatch(setLoading());
  fetch(`https://watch-it-api-v1.herokuapp.com/api/v1/watchlists/${id}`, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(newContent),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'Error') {
        throw new Error(data.message);
      }
      dispatch(Success(data));
      dispatch(setSuccess());
      return data;
    })
    .catch((error) => {
      dispatch(setErrors(error.message));
      return error;
    });
};

export const destroy = (id, token) => (dispatch) => {
  dispatch(setLoading());
  fetch(`https://watch-it-api-v1.herokuapp.com/api/v1/watchlists/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'Error') {
        throw new Error(data.message);
      }
      dispatch(Success(data));
      dispatch(setSuccess());
      return data;
    })
    .catch((error) => {
      dispatch(setErrors(error.message));
      return error;
    });
};
