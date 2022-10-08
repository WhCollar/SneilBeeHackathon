import {
  IS_ERROR,
} from './actionsTypes';

const initialState = {
  error: false,
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case IS_ERROR: {
      return { ...state, error: action.payload };
    }
    
    default: return state;
  }
}
