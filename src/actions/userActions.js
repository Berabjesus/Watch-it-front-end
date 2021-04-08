import * as userTypes from '../types/userTypes';

const fetchingData = () => ({
  type: userTypes.USER_DATA_FETCH_REQUEST,
});

const fetchSuccess = (data) => ({
  type: userTypes.USER_DATA_FETCH_SUCCESS,
  payload: data,
});

const fetchFail = (data) => ({
  type: userTypes.USER_DATA_FETCH_FAIL,
  payload: data,
});

const query = (token) => (dispatch) => {
  dispatch(fetchingData());
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
      return data;
    })
    .catch((error) => {
      dispatch(fetchFail(error.message));
      return error;
    });
};

export default query;
