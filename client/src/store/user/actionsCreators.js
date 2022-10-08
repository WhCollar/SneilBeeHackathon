import {
} from './actionsTypes';

export function registrationUser(first_name, last_name, username, email, password) {
  return (dispatch) => {
    fetch('https://0c52-45-10-42-113.eu.ngrok.io/api/auth/users', {
      method: 'POST',
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(data => data.json())
    .then(data => console.log(data));
  };
}

export function loginUser(email, password) {
  return (dispatch) => {
    // console.log(login, password);
    fetch('/api/auth/login/access-token', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(data => data.json())
    .then(data => {
      if (data.access_token) {
        localStorage.setItem('user', data.access_token);
      }

      // return data;
    });

  };
}

export function getUser() {
  return (dispatch) => {
    fetch('/api/auth/users')
    .then(data => data.json()
    .then(data => console.log(data)));
  };
}

export function logout() {
  localStorage.removeItem('user');
}
