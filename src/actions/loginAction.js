import * as loginTypes from '../types/loginTypes';

export const loggingIn = () => ({
  type: loginTypes.LOGIN_REQUEST,
});

export const loginSuccess = (data) => ({
  type: loginTypes.LOGIN_SUCCESS,
  payload: data,
});

export const loginFail = (data) => ({
  type: loginTypes.LOGIN_FAIL,
  payload: data,
});

export const login = (credentials) => (dispatch) => {
  dispatch(loggingIn());
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
      console.log(data);
      dispatch(loginSuccess(data));
      return data;
    })
    .catch((error) => {
      console.log(error.message);
      dispatch(loginFail(error.message));
      return error;
    });
};
