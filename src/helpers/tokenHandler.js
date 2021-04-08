export const setCredentials = (username, token) => {
  localStorage.setItem('watchItToken', JSON.stringify(token));
  localStorage.setItem('watchItUsername', JSON.stringify(username));
};

export const getToken = () => JSON.parse(localStorage.getItem('watchItToken'));
export const getUsername = () => JSON.parse(localStorage.getItem('watchItUsername'));
