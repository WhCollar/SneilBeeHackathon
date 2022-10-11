import * as React from 'react';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import './Header.css';

export default function Header() {
  return (
    <header>
      <Navigation />
      <UserMenu />
    </header>
  );
}
