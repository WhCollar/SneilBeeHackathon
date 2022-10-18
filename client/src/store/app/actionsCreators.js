import {
  USER_MENU_OPEN,
  USER_MENU_CLOSE,
  USER_MENU_CHANGE_STATE,
  ACTIVATE_POPUP,
  DEACTIVATE_POPUP,
  GET_CONTENT_TYPE,
} from './actionsTypes';

export const userMenuOpen = () => ({ type: USER_MENU_OPEN });

export const userMenuClose = () => ({ type: USER_MENU_CLOSE });

export const userMenuChangeState = () => ({ type: USER_MENU_CHANGE_STATE });

export const activatePopup = () => ({ type: ACTIVATE_POPUP, payload: true });

export const deactivatePopup = () => ({ type: DEACTIVATE_POPUP, payload: false });

export const getContentType = (contentType) => ({ type: GET_CONTENT_TYPE, payload: contentType });
