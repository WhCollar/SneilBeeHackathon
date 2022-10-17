import * as React from 'react';
import Navigation from '../Navigation/Navigation';
import UserNav from '../UserNav/UserNav';
import style from './Header.module.css';

export default function Header({ userMenuRef }) {
  return (
    <header>
      <Navigation />
      <UserNav userMenuRef={userMenuRef} />
    </header>
  );
}
