import {
  IS_ERROR,
  LOAD_USER,
} from './actionsTypes';

const initialState = {
  error: false,
  data: [],
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case IS_ERROR: {
      return { ...state, error: action.payload };
    }

    case LOAD_USER: {
      return { ...state, data: action.payload };
    }

    default: return state;
  }
}
