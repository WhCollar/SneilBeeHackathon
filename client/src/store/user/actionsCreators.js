import {
  IS_ERROR,
  LOAD_USER,
} from './actionsTypes';

const SERVER_HOST = 'https://0c52-45-10-42-113.eu.ngrok.io';

export function registrationUser(first_name, last_name, username, email, password) {
  return (dispatch) => {
    fetch(SERVER_HOST + '/api/auth/users/', {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        email,
        password,
        hashed_id: '',
        public_wallet_key: '',
        private_wallet_key: '',
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(data => data.json())
    .then(data => console.log(data));
  };
}

export function loginUser(email, password) {
  return (dispatch) => {
    fetch(SERVER_HOST + '/api/auth/login/access-token', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(data => data.json())
    .then(data => {
      if (data.detail) dispatch(isError(true));
      if (data.access_token) {
        dispatch(isError(false));
        localStorage.setItem('user', data.access_token);
      }
    });
  };
}

export function isError(payload) {
  return { type: IS_ERROR, payload };
}

export function getUser() {
  return (dispatch) => {
    fetch(SERVER_HOST + '/api/auth/users/me', {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + localStorage.user },
    })
    .then(data => data.json())
    .then(data => dispatch(loadUser(data)));
  };
}

export function loadUser(payload) {
  return { type: LOAD_USER, payload };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('user');
  }
}
