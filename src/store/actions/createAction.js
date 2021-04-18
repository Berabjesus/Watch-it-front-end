import { CREATE_SUCCESS } from '../types';
import { setLoading, setSuccess, setErrors } from './statusAction';

const createSuccess = () => ({
  type: CREATE_SUCCESS,
});

const create = (data, token) => (dispatch) => {
  dispatch(setLoading());
  // fetch('https://watch-it-api-v1.herokuapp.com/api/v1/watchlists/', {
  fetch('http://localhost:3000/api/v1/watchlists/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'Error') {
        throw new Error(data.message);
      }
      dispatch(createSuccess());
      dispatch(setSuccess());
    })
    .catch((error) => {
      dispatch(setErrors(error.message.split(',')));
    });
};

export default create;
