import { combineReducers } from 'redux';
import { RECEIVE_MEMES } from '../actions';

function memes(state=[], action) {
  switch (action.type) {
    case RECEIVE_MEMES:
      return action.payload;
    default:
      return state;
  }
}

const rootRecuder = combineReducers({ memes });

export default rootRecuder;
