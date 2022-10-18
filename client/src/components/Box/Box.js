import * as React from 'react';
import style from './Box.module.css';

export default function Box({ children, width, height, color, margin }) {
  const background = color === 'gray' ? '#F0F2F8' : '#FFFFFF';

  return (
    <div
      className={style.box}
      style={{ width, height, background, margin }}
    >
      {children}
    </div>
  );
}
