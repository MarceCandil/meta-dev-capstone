import React from 'react';
import HambIcon from '../../assets/icons/hamb-menu.svg'
import './Nav.css';
import { useWindowSize } from '../../hooks/useWindowSize';

export const NavigationLinks = [
  { name: 'Home', path: '/#' },
  { name: 'About', path: '/#' },
  { name: 'Menu', path: '/#' },
  { name: 'Reservations', path: '/#' },
  { name: 'Order Online', path: '/#' },
  { name: 'Login', path: '/#' },
]

function Nav() {
  const size = useWindowSize();

  return (
      <nav>
        {
          size.width! < 900 ? (
            <>
              <img src={HambIcon} alt='Hamburg Ico'/>
            </>
          ): (
            <ul>
              {NavigationLinks.map(nav => <li key={nav.name}><a href={nav.path}>{nav.name}</a></li>)}
          </ul>
          )
        }
      </nav>
  );
}

export default Nav;