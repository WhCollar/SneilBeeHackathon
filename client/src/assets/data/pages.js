import { v4 as uuidv4 } from 'uuid';

import profile from '../icons/profile.svg';
import settings from '../icons/settings.svg';
import reg from '../icons/reg.svg';
import login from '../icons/login.svg';
import logout from '../icons/logout.svg';

export const PATH = {
  main: '/',
  quests: '/quests',
  marketplace: '/marketplace',
  profile: '/profile',
  settings: '/settings',
};

const WIDTH = 'none';

export const PAGES = [{
  id: uuidv4(),
  name: 'Главная',
  width: WIDTH,
  margin: '0 10px 0 0',
  path: PATH.main,
}, {
  id: uuidv4(),
  name: 'Квесты',
  width: WIDTH,
  margin: '0 10px',
  path: PATH.quests,
}, {
  id: uuidv4(),
  name: 'Маркет',
  width: WIDTH,
  margin: '0 0 0 10px',
  path: PATH.marketplace,
}];

export const USER_MENU = [{
  id: uuidv4(),
  name: 'Профиль',
  icon: profile,
  auth: true,
  type: 'navigate',
  path: PATH.profile,
}, {
  id: uuidv4(),
  name: 'Настройки',
  icon: settings,
  auth: true,
  type: 'navigate',
  path: PATH.settings,
}, {
  id: uuidv4(),
  name: 'Регистрация',
  icon: reg,
  auth: false,
  type: 'open-popup',
  content: 'registration',
}, {
  id: uuidv4(),
  name: 'Вход',
  icon: login,
  auth: false,
  type: 'open-popup',
  content: 'login',
}, {
  id: uuidv4(),
  name: 'Выход',
  icon: logout,
  auth: true,
  type: 'dispatch',
  content: 'logout',
}];
