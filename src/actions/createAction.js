import * as createTypes from '../types/createTypes';

const creating = () => ({
  type: createTypes.CREATE_REQUEST,
});

const createSuccess = () => ({
  type: createTypes.CREATE_SUCCESS,
});

const createFail = (data) => ({
  type: createTypes.CREATE_FAIL,
  payload: data,
});

const create = (data, token) => (dispatch) => {
  dispatch(creating());
  fetch('https://watch-it-api-v1.herokuapp.com/api/v1/watchlists/', {
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
    })
    .catch((error) => {
      dispatch(createFail(error.message.split(',')));
    });
};

export default create;
