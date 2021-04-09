import * as loginTypes from '../types/loginTypes';

const loggingIn = () => ({
  type: loginTypes.LOGIN_REQUEST,
});

export const loginSuccess = (data) => ({
  type: loginTypes.LOGIN_SUCCESS,
  payload: data,
});

const loginFail = (data) => ({
  type: loginTypes.LOGIN_FAIL,
  payload: data,
});

export const logout = () => ({
  type: loginTypes.LOGOUT,
});

export const login = (credentials) => (dispatch) => {
  dispatch(loggingIn());
  fetch('https://watch-it-api-v1.herokuapp.com/api/v1/login/', {
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
      return data;
    })
    .catch((error) => {
      dispatch(loginFail(error.message));
      return error;
    });
};

export const signup = (credentials) => (dispatch) => {
  dispatch(loggingIn());
  fetch('https://watch-it-api-v1.herokuapp.com/api/v1/signup/', {
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
      return data;
    })
    .catch((error) => {
      dispatch(loginFail(error.message.split(',')));
      return error;
    });
};
