import * as React from 'react';
import Button from '../Button/Button';
import { PROFILE } from '../../assets/data/pages';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './UserNav.module.css';
import UserMenu from '../UserMenu/UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import { userMenuChangeState } from '../../store/app/actionsCreators';

export default function UserNav({ userMenuRef }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userMenuActive = useSelector(state => state.app.userMenuActive);

  const handleClick = React.useCallback((path) => navigate(path), [navigate]);

  const handleUserMenuOpen = () => dispatch(userMenuChangeState());

  return (
    <div className={style.userNav} ref={userMenuRef}>
      <Button
        type={PROFILE.path === pathname ? 'lightActive' : 'light'}
        margin={PROFILE.margin}
        handleClick={() => handleClick(PROFILE.path)}
      >
        {PROFILE.name}
      </Button>
      <div
        className={userMenuActive ? style.userIconDeactive : style.userIcon}
        onClick={handleUserMenuOpen}
      >
      </div>
      {userMenuActive && <UserMenu />}
    </div>
  );
}
