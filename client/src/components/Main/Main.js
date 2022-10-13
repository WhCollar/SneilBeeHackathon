import * as React from 'react';
import Button from '../Button/Button';
import style from './Main.module.css';

export default function Main() {
  return (
    <div>
      <h2>Main</h2>
      <Button
        type={'gradient'}
        width={'200px'}
        margin={'20px'}
      >Войти</Button>
    </div>
  );
}
