import * as loginTypes from '../types/loginTypes';
import { setLoading, setSuccess, setErrors } from './statusAction';

export const loginSuccess = (data) => ({
  type: loginTypes.LOGIN_SUCCESS,
  payload: data,
});

export const logout = () => ({
  type: loginTypes.LOGOUT,
});

export const login = (credentials) => (dispatch) => {
  dispatch(setLoading());
  fetch('http://localhost:3000/api/v1/sessions/', {
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
      dispatch(loginSuccess(data));
      dispatch(setSuccess());
      return data;
    })
    .catch((error) => {
      dispatch(setErrors(error.message));
      return error;
    });
};

export const signup = (credentials) => (dispatch) => {
  dispatch(setLoading());
  fetch('http://localhost:3000/api/v1/users/', {
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
      dispatch(loginSuccess(data));
      dispatch(setSuccess());
      return data;
    })
    .catch((error) => {
      dispatch(setErrors(error.message.split(',')));
      return error;
    });
};
