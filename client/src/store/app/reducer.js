import {
  USER_MENU_OPEN,
  USER_MENU_CLOSE,
} from './actionsTypes';

const initialState = {
  userMenuActive: false,
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case USER_MENU_OPEN: {
      return { ...state, userMenuActive: true };
    }
    case USER_MENU_CLOSE: {
      return { ...state, userMenuActive: false };
    }


    default: return state;
  }
}
