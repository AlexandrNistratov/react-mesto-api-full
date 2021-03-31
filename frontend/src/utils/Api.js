import { base_url } from './utils'

class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getUserInfo () {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include'
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  addUserInfo (data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  getAllCards() {
    return fetch(`${this._url}/cards`,{
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  addNewCards(data) {
    return fetch(`${this._url}/cards`,{
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    }).then((res) => {
      // console.log(data)
      if (res.ok) {
        return res.json();
      }else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  deleteCards(id) {
    return fetch(`${this._url}/cards/${id}`,{
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include'
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
    })
  }

  likeCard(likeId) {
    return fetch(`${this._url}/cards/${likeId}/likes`, {
      method: 'PUT',
      headers: this._headers,
      credentials: 'include'
    }).then((res) => {
      if(res.ok) {
        return res.json();
      }else  {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  dislikeCard(likeId) {
    return fetch(`${this._url}/cards/${likeId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include'
    }).then((res) => {
      if(res.ok) {
        return res.json();
      }else  {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  addUserAvatar (data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        avatar: data.avatar
      })
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }
}

export  const api = new Api({
  url: base_url,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    'content-type': 'application/json'
  }
});
console.log( base_url)