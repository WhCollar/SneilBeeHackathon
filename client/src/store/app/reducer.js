import {
  USER_MENU_OPEN,
  USER_MENU_CLOSE,
  USER_MENU_CHANGE_STATE,
  ACTIVATE_POPUP,
  DEACTIVATE_POPUP,
  GET_CONTENT_TYPE,
} from './actionsTypes';

const initialState = {
  userMenuActive: false,
  popupActive: false,
  popupContentType: '',
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
    case ACTIVATE_POPUP: {
      return { ...state, popupActive: action.payload };
    }
    case DEACTIVATE_POPUP: {
      return { ...state, popupActive: action.payload };
    }
    case GET_CONTENT_TYPE: {
      return { ...state, popupContentType: action.payload };
    }

    default: return state;
  }
}
