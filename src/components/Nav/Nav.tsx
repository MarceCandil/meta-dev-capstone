import React, { useEffect, useRef, useState } from 'react';
import HambIcon from 'assets/icons/hamb-menu.svg'
import './Nav.css';
import { useWindowSize } from 'hooks/useWindowSize';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from 'helpers/statics';

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const size = useWindowSize();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (
        navbarOpen &&
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
  }, [navbarOpen]);

  return (
    <nav ref={ref} className='navbar'>
      {size.width! < 900 && (
          <button aria-label="On Click" className='toggle' onClick={() => setNavbarOpen((prev) => !prev)}>
            <img src={HambIcon} alt='Hamburg Ico'/>
          </button>
        )}
      <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
        {NAVIGATION_LINKS.map(nav => <li key={nav.name}><Link to={nav.path}>{nav.name}</Link></li>)}
      </ul>
    </nav>
  );
}

export default Nav;