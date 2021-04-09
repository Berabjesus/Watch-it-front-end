import * as viewTypes from '../types/viewTypes';

const sendingRequest = () => ({
  type: viewTypes.REQUEST,
});

const Success = (data) => ({
  type: viewTypes.SUCCESS,
  payload: data,
});

const editFail = (data) => ({
  type: viewTypes.EDIT_FAIL,
  payload: data,
});

const deleteFail = (data) => ({
  type: viewTypes.DELETE_FAIL,
  payload: data,
});

export const reset = () => ({
  type: 'RESET',
});

export const update = (id, newContent, token) => (dispatch) => {
  dispatch(sendingRequest());
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
      dispatch(Success(data.message));
      return data;
    })
    .catch((error) => {
      dispatch(editFail(error.message));
      return error;
    });
};

export const destroy = (id, token) => (dispatch) => {
  dispatch(sendingRequest());
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
      dispatch(Success(data.message));
      return data;
    })
    .catch((error) => {
      dispatch(deleteFail(error.message));
      return error;
    });
};
