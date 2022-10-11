import * as React from 'react';
import './Button.css';

export default function Button({ children, type, width, margin, handleClick }) {
  return (
    <button className={type} style={{ width, margin }} onClick={handleClick}>
      {children}
    </button>
  );
}
