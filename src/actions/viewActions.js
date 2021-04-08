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
  console.log(token);
  dispatch(sendingRequest());
  fetch(`http://localhost:3000/api/v1/watchlists/${id}`, {
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
      console.log(data);
      if (data.status === 'Error') {
        console.log('error here ');

        throw new Error(data.message);
      }
      console.log(data.message);
      dispatch(Success(data.message));
      return data;
    })
    .catch((error) => {
      dispatch(editFail(error.message));
      return error;
    });
};

export const destroy = (token) => (dispatch) => {
  console.log(token);
  dispatch(sendingRequest());
  fetch('http://localhost:3000/api/v1/watchlists/', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'Error') {
        throw new Error(data.message);
      }
      console.log(data.data);
      dispatch(Success(data.data));
      return data;
    })
    .catch((error) => {
      dispatch(deleteFail(error.message));
      return error;
    });
};
