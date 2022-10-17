import {
  USER_MENU_OPEN,
  USER_MENU_CLOSE,
  USER_MENU_CHANGE_STATE,
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
    case USER_MENU_CHANGE_STATE: {
      return { ...state, userMenuActive: !state.userMenuActive };
    }


    default: return state;
  }
}
