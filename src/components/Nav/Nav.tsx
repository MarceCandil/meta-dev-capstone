import React from 'react';

export const NavigationLinks = [
  { name: 'Home', path: '/#' },
  { name: 'About', path: '/#' },
  { name: 'Menu', path: '/#' },
  { name: 'Reservations', path: '/#' },
  { name: 'Order Online', path: '/#' },
  { name: 'Login', path: '/#' },
]

function Nav() {
  return (
      <nav>
        <ul>
          {NavigationLinks.map(nav => <li key={nav.name}><a href={nav.path}>{nav.name}</a></li>)}
        </ul>
      </nav>
  );
}

export default Nav;