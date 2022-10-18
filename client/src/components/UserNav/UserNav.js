import * as React from 'react';
import style from './UserNav.module.css';
import UserMenu from '../UserMenu/UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import { userMenuChangeState } from '../../store/app/actionsCreators';

export default function UserNav({ userMenuRef }) {
  const dispatch = useDispatch();

  const userMenuActive = useSelector(state => state.app.userMenuActive);

  const handleUserMenuOpen = () => dispatch(userMenuChangeState());

  return (
    <div className={style.userNav} ref={userMenuRef}>
      <div
        className={userMenuActive ? style.userIconDeactive : style.userIcon}
        onClick={handleUserMenuOpen}
      >
      </div>
      {userMenuActive && <UserMenu />}
    </div>
  );
}
