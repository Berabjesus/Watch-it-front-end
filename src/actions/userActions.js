import * as userTypes from '../types/userTypes';

export const fetchingData = () => ({
  type: userTypes.USER_DATA_FETCH_REQUEST,
});

export const fetchSuccess = (data) => ({
  type: userTypes.USER_DATA_FETCH_SUCCESS,
  payload: data,
});

export const fetchFail = (data) => ({
  type: userTypes.USER_DATA_FETCH_FAIL,
  payload: data,
});

export const query = (credentials) => (dispatch) => {
  dispatch(fetchingData());
  fetch('http://localhost:3000/api/v1/login/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'Error') {
        throw new Error(data.message);
      }
      dispatch(fetchSuccess(data));
      return data;
    })
    .catch((error) => {
      dispatch(fetchFail(error.message));
      return error;
    });
};
