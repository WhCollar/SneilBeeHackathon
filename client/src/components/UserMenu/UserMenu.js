import * as React from 'react';
import { USER_MENU } from '../../assets/data/pages';
import style from './UserMenu.module.css';

export default function UserMenu() {

  return (
    <ul className={style.userMenu}>
      {USER_MENU.map((menuItem, idx, array) => (
        <li
          className={idx !== array.length - 1 ? style.menuButton : undefined}
          key={menuItem.id}
        >
          <img src={menuItem.icon} alt={menuItem.name} />
          <p>{menuItem.name}</p>
        </li>
      ))}
    </ul>
  );
}
