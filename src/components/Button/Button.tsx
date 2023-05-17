import React from 'react';
import './Button.css';

type ButtonProps = {
  name: string;
  variant: 'default' | 'clicked' | 'disabled';
  width?: number;
  height?: number;
  mt?: number;
}
function MyButton({ name, variant, width, height, mt}: ButtonProps) {
  const color = {
    default: '#F4CE14',
    clicked: '#495E57',
    disabled: '#C8C8C8',
  }
  return (
    <button
      className='button-wrapper'
      style={{
        width: `${width ?? 200}px`,
        height: `${height ?? 60}px`,
        backgroundColor: `${color[variant ?? 'default']}`,
        marginTop: `${mt ?? 0}px`
      }}>
      {name}
    </button>
  );
}

export default MyButton;
