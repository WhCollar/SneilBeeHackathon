import * as React from 'react';
import style from './Button.module.css';

export default function Button({ children, type, width, margin, handleClick }) {
  return (
    <button className={style[type]} style={{ width, margin }} onClick={handleClick}>
      {children}
    </button>
  );
}
