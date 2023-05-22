import React from 'react';
import './Button.css';

type ButtonProps = {
  onClick: () => void;
  name: string;
  variant: 'default' | 'clicked' | 'disabled';
  width?: number;
  height?: number;
  mt?: number;
  dataTestid?: string;
}
function MyButton({ onClick, name, variant, width, height, mt, dataTestid}: ButtonProps) {
  const color = {
    default: '#F4CE14',
    clicked: '#495E57',
    disabled: '#C8C8C8',
  }
  return (
    <button
      onClick={onClick}
      aria-label="On Click"
      className='button-wrapper'
      data-testid={dataTestid}
      disabled={variant === 'disabled'}
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
