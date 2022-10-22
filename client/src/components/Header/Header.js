import * as React from 'react';
import Navigation from '../Navigation/Navigation';
import UserNav from '../UserNav/UserNav';
import style from './Header.module.css';

export default function Header({ userMenuRef }) {
  return (
    <header>
      <h1 className={style.logo}>ListPicker</h1>
      <div className={style.navContainer}>
        <Navigation />
        <UserNav userMenuRef={userMenuRef} />
      </div>
    </header>
  );
}
