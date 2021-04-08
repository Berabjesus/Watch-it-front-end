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
      if (data.status === 'Error') {
        throw new Error(data.message);
      }
      console.log('herherhreh');
      console.log(data);
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
  fetch('http://localhost:3000/api/v1/signup/', {
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
