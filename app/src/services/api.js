const URL = '/api';
const AUTH_URL = `${URL}/auth`;
const SEARCH_URL = `${URL}/search`;
const GAMES_URL = `${URL}/games`;
const BOARDS_URL = `${URL}/boards`;
const TEAMS_URL = `${URL}/teams`;

function responseHandler(response) {
  if(response.ok) return response.json();
  return response.json().then(body => {
    throw body.error;
  });
}

let token = '';

function getHeaders() {
  const headers = { 'Content-type': 'application/json' };
  if(token) headers['Authorization'] = token;
  return headers;
}

export function getBoards() {
  return fetch (BOARDS_URL, {
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function addGame(game) {
  return fetch(GAMES_URL, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(game)
  })
    .then(responseHandler);
}

export function addTeam(team) {
  return fetch(TEAMS_URL, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(team)
  })
    .then(responseHandler);
}

export function signUp(credentials) {
  return fetch(`${AUTH_URL}/signup`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(credentials)
  })
    .then(responseHandler)
    .then(user => {
      storeUser(user);
      return user;
    });
}

export function signIn(credentials) {
  return fetch(`${AUTH_URL}/signin`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(credentials)
  })
    .then(responseHandler)
    .then(user => {
      storeUser(user);
      return user;
    });
}

export function signOut() {
  token = '';
  window.localStorage.removeItem('user');
}

function storeUser(user) {
  token = user.id;
  window.localStorage.setItem('user', JSON.stringify(user));
}

export function checkForToken() {
  const json = window.localStorage.getItem('user');
  if(!json) {
    return null;
  }

  const user = JSON.parse(json);
  token = user.id;
  return user;
}

export function getData(keywords) {
  return fetch(`${SEARCH_URL}/${keywords}`, {
    
    headers: getHeaders()
  })
    .then(responseHandler);
}
