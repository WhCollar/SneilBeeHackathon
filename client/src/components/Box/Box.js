import * as React from 'react';
import style from './Box.module.css';

export default function Box({ children, width, height, color, margin }) {
  const background = color === 'gray' ? '#f5f7fa' : '#FFFFFF';

  return (
    <div
      className={style.box}
      style={{ width, height, background, margin }}
    >
      {children}
    </div>
  );
}
