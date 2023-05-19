import React from "react";

import Landing from './Landing/Landing';
import Specials from './Specials/Specials';
import Testimonials from './Testimonials/Testimonials';
import About from './About/About';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Outlet } from 'react-router-dom';

function Main() {
  const size = useWindowSize();
  const isVisible = !(size.width! < 900);

  return (
    <main>
      <Landing isVisible={isVisible}/>
      <Specials />
      <Testimonials isVisible={isVisible} />
      <About isVisible={isVisible}/>
      <Outlet />
    </main>
  )
}

export default Main;