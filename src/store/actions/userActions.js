import * as userTypes from '../types/userTypes';
import { setLoading, setSuccess, setErrors } from './statusAction';

const fetchSuccess = (data) => ({
  type: userTypes.USER_DATA_FETCH_SUCCESS,
  payload: data,
});

const query = (token) => (dispatch) => {
  dispatch(setLoading());
  fetch('http://localhost:3000/api/v1/watchlists/', {
    method: 'GET',
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
      dispatch(fetchSuccess(data.data));
      dispatch(setSuccess());
      return data;
    })
    .catch((error) => {
      dispatch(setErrors(error.message));
      return error;
    });
};

export default query;
