import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { USER_MENU } from '../../assets/data/pages';
import { userMenuClose } from '../../store/app/actionsCreators';
import style from './UserMenu.module.css';

export default function UserMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserMenuAction = (type, path, content) => {
    if (type === 'navigate') navigate(path);
    if (type === 'dispatch') {
      // TODO: Тут нужно докрутить кнопку выхода
    }
    dispatch(userMenuClose());
  };

  // TODO: Сделать условный рендеринг кнопок пользовательского меню

  return (
    <ul className={style.userMenu}>
      {USER_MENU.map((menuItem, idx, array) => (
        <li
          className={idx !== array.length - 1 ? style.menuButton : undefined}
          key={menuItem.id}
          onClick={() => handleUserMenuAction(menuItem.type, menuItem.path, menuItem.content)}
        >
          <img src={menuItem.icon} alt={menuItem.name} />
          <p>{menuItem.name}</p>
        </li>
      ))}
    </ul>
  );
}
