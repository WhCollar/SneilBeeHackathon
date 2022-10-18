import * as React from 'react';
import style from './Input.module.css';

export default function Input({ type, name, value, onChange }) {
  // TODO: Нужно разобраться с инпутом
  return (
    <input
      className={style.input}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
