import { USER_NAME, PASSWORD } from './.env'

export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

const URL = 'https://api.imgflip.com';

function receiveMemes(json) {
  const { memes } = json.data;
  return {
    type: RECEIVE_MEMES,
    payload: memes
  }
}

function fetchMemesJson() {
  return fetch(`${URL}/get_memes`)
    .then(response => response.json())
}

export function fetchMemes() {
  return function(dispatch) {
    return fetchMemesJson()
      .then(json => dispatch(receiveMemes(json)))
  }
}

export function newMeme(meme) {
  return {
    type: NEW_MEME,
    payload: meme
  }
}

function postMemeJson(params) {
  params['username'] = USER_NAME;
  params['password'] = PASSWORD;

  const bodyParams = Object.keys(params).map(key => {
    return encodeURIComponent(key) +
           '=' +
           encodeURIComponent(params[key])
    }).join('&');
    // console.log('bodyParams = ', bodyParams);

    return fetch(`${URL}/caption_image`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: bodyParams
    }).then(response => response.json())
}

export function createMeme(new_meme_obj) {
  return function(dispatch) {
    return postMemeJson(new_meme_obj)
      .then(new_mem => dispatch(newMeme(new_mem)))
  }
}
