import {
  LOAD_NEWS,
  // ADD_NEWS,
  // REMOVE_NEWS,
  // ADD_LIKES,
  // EDIT_NEWS,
} from './actionsTypes';

const initialState = {
  posts: [],
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_NEWS: {
      return { ...state, posts: action.payload };
    }

    default: return state;
  }
}
