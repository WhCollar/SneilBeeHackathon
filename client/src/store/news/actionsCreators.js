import {
  LOAD_NEWS,
  // ADD_NEWS,
  // REMOVE_NEWS,
  // ADD_LIKES,
  // EDIT_NEWS,
} from './actionsTypes';

export const SERVER_HOST = 'https://0c52-45-10-42-113.eu.ngrok.io/marketplace';

export function loadNewsFromServer() {
  return (dispatch) => {
    fetch(SERVER_HOST + '/Auth/NewsFeed', {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + localStorage.user },
    })
    .then(response => response.json())
    .then(data => {
      dispatch(loadNews(data));
    });
  };
}

export function loadNews(payload) {
  return { type: LOAD_NEWS, payload };
}

export function addLikes(postId, likesCount) {
  console.log(postId, likesCount);
  return (dispatch) => {
    fetch(SERVER_HOST + `/Auth/NewsFeed/Likes?postId=${postId}&likesCount=${likesCount}`, {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + localStorage.user,
      },
    });
  };
}
