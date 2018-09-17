const URL = '/api';
const AUTH_URL = `${URL}/auth`;
const SEARCH_URL = `${URL}/search`;
const GAMES_URL = `${URL}/games`;
const BOARDS_URL = `${URL}/me/boards`;
const TEAMS_URL = `${URL}/teams`;
const GAME_URL = `${URL}/game`;

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

export function getGames() {
  return fetch ('api/games-played', {
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function getBoards() {
  return fetch (BOARDS_URL, {
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function addGame(game) {
  return fetch(`${GAMES_URL}/${game.className}/${game.boardId}`, {
    method: 'POST',
    headers: getHeaders(),
  })
    .then(responseHandler);
}

export function addTeam(teamName) {
  return fetch(`${TEAMS_URL}/${teamName}`, {
    method: 'POST',
    headers: getHeaders(),
  })
    .then(responseHandler);
}

export function addTeamGame(teamId, gameId) {
  return fetch(`${TEAMS_URL}/games/${teamId}/${gameId}`, {
    method: 'POST',
    headers: getHeaders(),
  })
    .then(responseHandler);
}

export function getResults(gameId) {
  return fetch (`RESULTS_URL/${gameId}`, {
    headers: getHeaders()
  })
    .then(responseHandler);
} 

export function getTeams(gameId) {
  return fetch (`${URL}/teams/${gameId}`, {
    headers: getHeaders()
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
  console.log('api keywords', keywords);
  return fetch(`${SEARCH_URL}/${keywords}`, {
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function addCategory(category, board) {
  console.log('api category', category, 'api board', board);
  return fetch(`${BOARDS_URL}/${board}/categories/${category}`, {
    method: 'POST',
    headers: getHeaders(),
  })
    .then(responseHandler);
}

export function addBoard(board) {
  console.log('api board', board);
  return fetch(`${BOARDS_URL}/${board}`, {
    method: 'POST',
    headers: getHeaders(),
  })
    .then(responseHandler);
}

export function addClue(clue, answer, value, category) {
  console.log('api category', category, 'api clue', clue);
  return fetch(`${URL}/me/categories/${category}/clues/${clue}/${answer}/${value}`, {
    method: 'POST',
    headers: getHeaders(),
  })
    .then(responseHandler);
}

export function getClues(gameId) {
  return fetch (`${GAME_URL}/${gameId}`, {
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function getCategories(gameId) {
  return fetch (`${URL}/categories/${gameId}`, {
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function getScores(gameId) {
  return fetch (`${URL}/scores/${gameId}`, {
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function deleteTeamGame(gameId) {
  return fetch(`${URL}/delete-team-game/${gameId}`, {
    method: 'DELETE',
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function deleteCluesPlayed(gameId) {
  return fetch(`${URL}/delete-clues-played/${gameId}`, {
    method: 'DELETE',
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function deleteGame(gameId) {
  return fetch(`${URL}/delete-game/${gameId}`, {
    method: 'DELETE',
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function setTurn(gameId, turn) {
  return fetch(`${URL}/game/${gameId}/turn/${turn}`, {
    method: 'PUT',
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function setScore(teamId, newScore) {
  return fetch(`${URL}/team-id/${teamId}/set-score/${newScore}`, {
    method: 'PUT',
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function setCluePlayed(clueId, gameId) {
  return fetch(`${URL}/clue-played/${clueId}/game/${gameId}`, {
    method: 'POST',
    headers: getHeaders(),
  })
    .then(responseHandler);
}

export function getCluesPlayed(gameId) {
  return fetch(`${URL}/clues-played/game/${gameId}`, {
    headers: getHeaders(),
  })
    .then(responseHandler);
}

export function getTurn(gameId) {
  return fetch(`${URL}/get-turn/${gameId}`, {
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function getCategoryNumber(boardId) {
  console.log('get number called', boardId);
  return fetch (`${BOARDS_URL}/categoryNumber/${boardId}`, {
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function getBoardClues(boardId) {
  return fetch (`${BOARDS_URL}/clues/${boardId}`, {
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function getBoardCategories(boardId) {
  return fetch (`${BOARDS_URL}/categories/${boardId}`, {
    headers: getHeaders()
  })
    .then(responseHandler);
}