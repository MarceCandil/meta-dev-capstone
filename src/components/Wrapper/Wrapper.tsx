import React from "react";
import './Wrapper.css';

type WrapperProps = {
  children: React.ReactNode;
  isVisible?: boolean;
  bgColor?: string;
  height?: number;
  mb?: number;
};

function Wrapper({children, isVisible = true, bgColor, height, mb}: WrapperProps) {

  return (
    <section
      style={{
        display: isVisible ? 'flex' : 'none',
        backgroundColor: bgColor ?? '#ffffff',
        height: `${height ?? 20}px`,
        marginBottom: `${mb ?? 0}px`
      }}
        className='wrapper'
      >
        <div className='wrapper-content'>{children}</div>
      </section>
  )
}

export default Wrapper;
