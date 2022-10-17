import {
  USER_MENU_OPEN,
  USER_MENU_CLOSE,
  USER_MENU_CHANGE_STATE,
} from './actionsTypes';

export const userMenuOpen = () => ({ type: USER_MENU_OPEN });
export const userMenuClose = () => ({ type: USER_MENU_CLOSE });
export const userMenuChangeState = () => ({ type: USER_MENU_CHANGE_STATE });
