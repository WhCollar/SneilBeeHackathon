import * as React from 'react';
import Button from '../Button/Button';
import { PROFILE } from '../../assets/data/pages';
import { useLocation, useNavigate } from 'react-router-dom';
import './UserMenu.css';

export default function UserMenu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = React.useCallback((path) => navigate(path), [navigate]);

  return (
    <div className="user-menu">
      <Button
        type={PROFILE.path === pathname ? 'light-active' : 'light'}
        margin={PROFILE.margin}
        handleClick={() => handleClick(PROFILE.path)}
      >
        {PROFILE.name}
      </Button>
      <div className="user-icon">
      </div>
    </div>
  );
}
