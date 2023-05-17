import React from 'react';
import Logo from '../../assets/Logo.svg'
import Nav from '../Nav/Nav';
import './Header.css';
import Wrapper from '../Wrapper/Wrapper';

export const NavigationLinks = [
  { name: 'Home', path: '/#' },
  { name: 'About', path: '/#' },
  { name: 'Menu', path: '/#' },
  { name: 'Reservations', path: '/#' },
  { name: 'Order Online', path: '/#' },
  { name: 'Login', path: '/#' },
]

function Header() {
  return (
      <Wrapper height={123}>
        <header>
            <img
              loading="lazy"
              width="200"
              height="76"
              src={Logo}
              alt="logo"
            />
            <Nav />
        </header>
      </Wrapper>
  );
}

export default Header;