import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PAGES } from '../../assets/data/pages';
import Button from '../Button/Button';
// eslint-disable-next-line no-unused-vars
import style from './Navigation.module.css';

export default function Navigation() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = React.useCallback((path) => navigate(path), [navigate]);

  return (
    <nav>
      {PAGES.map((page) => (
        <Button
          key={page.id}
          type={pathname === page.path ? 'lightActive' : 'light'}
          width={page.width}
          margin={page.margin}
          handleClick={() => handleClick(page.path)}
        >
          {page.name}
        </Button>
      ))}
    </nav>
  );
}
