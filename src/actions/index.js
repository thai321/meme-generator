export const RECEIVE_MEMES = 'RECEIVE_MEMES';

function receiveMemes(json) {
  const { memes } = json.data;
  return {
    type: RECEIVE_MEMES,
    payload: memes
  }
}

function fetchMemesJson() {
  const URL = 'https://api.imgflip.com/get_memes';
  return fetch(URL)
    .then(response => response.json())
}


export function fetchMemes() {
  return function(dispatch) {
    return fetchMemesJson()
      .then(json => dispatch(receiveMemes(json)))
  }
}
