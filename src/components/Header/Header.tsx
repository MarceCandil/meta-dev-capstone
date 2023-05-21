import React from 'react';
import Logo from 'assets/Logo.svg'
import Nav from 'components/Nav/Nav';
import './Header.css';

function Header() {
  return (
    <header className='wrapper'>
      <img
        loading="lazy"
        width="200"
        height="76"
        src={Logo}
        alt="logo"
      />
      <Nav />
    </header>
  );
}

export default Header;