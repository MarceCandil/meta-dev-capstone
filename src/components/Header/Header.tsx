import React from 'react';
import Logo from '../../assets/Logo.svg'

function Header() {
  return (
      <header>
        <img
          loading="lazy"
          width="400"
          height="100"
          src={Logo}
          alt="logo"
        />
      </header>
  );
}

export default Header;