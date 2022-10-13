import * as React from 'react';
import Navigation from '../Navigation/Navigation';
import UserNav from '../UserNav/UserNav';
import style from './Header.module.css';

export default function Header() {
  return (
    <header>
      <Navigation />
      <UserNav />
    </header>
  );
}
