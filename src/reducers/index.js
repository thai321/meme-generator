import { combineReducers } from 'redux';
import { RECEIVE_MEMES, NEW_MEME} from '../actions';

function memes(state=[], action) {
  switch (action.type) {
    case RECEIVE_MEMES:
      return action.payload;
    default:
      return state;
  }
}

function myMemes(state=[], action) {
  switch (action.type) {
    case NEW_MEME:
      state = [...state, action.payload];
      return state
    default:
      return state
  }
}

const rootRecuder = combineReducers({ memes, myMemes });

export default rootRecuder;
