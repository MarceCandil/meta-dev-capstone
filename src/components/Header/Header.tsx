import React, { useState } from 'react';
import Logo from 'assets/Logo.svg'
import Nav from 'components/Nav/Nav';
import HambIcon from 'assets/icons/hamb-menu.svg'
import { useWindowSize } from 'hooks/useWindowSize';
import './Header.css';

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const size = useWindowSize();

  return (
    <header className='wrapper'>
      {size.width! < 900 && (
        <button aria-label="On Click" className='btn__toggle' onClick={() => setNavbarOpen((prev) => !prev)}>
          <img src={HambIcon} alt='Hamburg Ico'/>
        </button>
      )}
      <div className='img__container'>
        <img
          loading="lazy"
          width="200"
          height="76"
          src={Logo}
          alt="logo"
        />
      </div>
      <Nav isNavbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
    </header>
  );
}

export default Header;