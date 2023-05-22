import React, { useEffect, useRef } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from 'helpers/statics';

type NavProps = {
  isNavbarOpen: boolean;
  setNavbarOpen: (isNavbarOpen: boolean) => void;
}

function Nav({ isNavbarOpen, setNavbarOpen }: NavProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (
        isNavbarOpen &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [isNavbarOpen, setNavbarOpen]);

  return (
    <nav ref={ref} className='navbar'>
      <ul className={`menu-nav${isNavbarOpen ? ' show-menu' : ''}`}>
        {NAVIGATION_LINKS.map(nav => <li key={nav.name}><Link to={nav.path}>{nav.name}</Link></li>)}
      </ul>
    </nav>
  );
}

export default Nav;