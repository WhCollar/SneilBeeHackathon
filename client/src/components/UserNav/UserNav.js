import * as React from 'react';
import Button from '../Button/Button';
import { PROFILE } from '../../assets/data/pages';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './UserNav.module.css';
import UserMenu from '../UserMenu/UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import { userMenuOpen } from '../../store/app/actionsCreators';

export default function UserNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userMenuActive = useSelector(state => state.app.userMenuActive);

  const handleClick = React.useCallback((path) => navigate(path), [navigate]);

  const handleUserMenuOpen = () => dispatch(userMenuOpen());

  return (
    <div className={style.userNav}>
      <Button
        type={PROFILE.path === pathname ? 'lightActive' : 'light'}
        margin={PROFILE.margin}
        handleClick={() => handleClick(PROFILE.path)}
      >
        {PROFILE.name}
      </Button>
      {/* TODO: При открытии меню пользователя иконка должна либо перестать ховериться либо зависнуть в верхнем положении ховера */}
      {/* TODO: Также нужно решить проблему с тем, что если меню уже открыто при нажатии на иконку оно закрывается и открывается заново, а должно просто закрыться */}
      <div className={style.userIcon} onClick={handleUserMenuOpen}>
      </div>
      {userMenuActive && <UserMenu />}
    </div>
  );
}
