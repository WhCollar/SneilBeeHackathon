import { v4 as uuidv4 } from 'uuid';

export const PATH = {
  main: '/',
  quests: '/quests',
  marketplace: '/marketplace',
  profile: '/profile',
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

export const PROFILE = {
  name: 'Профиль',
  width: WIDTH,
  margin: '0 20px',
  path: PATH.profile,
};
