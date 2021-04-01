import { base_url } from './utils';

export const register = (email, password) => fetch(`${base_url}/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  body: JSON.stringify({ email, password }),
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
// .then(checkResponse)

export const authorize = (email, password) => fetch(`${base_url}/signin`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
  credentials: 'include',
})
  .then(checkResponse)
  .then((data) => {
    if (data.token) {
      localStorage.setItem('jwt', data.token);
      return data;
    }
  });

export const getContent = (token) => fetch(`${base_url}/users/me`, {
  method: 'GET',
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
  .then(checkResponse);

const checkResponse = (response) => (response.ok ? response.json() : Promise.reject('Ошибка на сервере'));
