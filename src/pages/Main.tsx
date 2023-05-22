import React from "react";
import { Route, Routes } from 'react-router-dom';

import About from 'components/About/About';
import Landing from 'components/Landing/Landing';
import Specials from 'components/Specials/Specials';
import Testimonials from 'components/Testimonials/Testimonials';
import { useWindowSize } from 'hooks/useWindowSize';
import BookingPage from './BookingPage/BookingPage';
import ConfirmationPage from './Confirmation/Confirmation';
import MenuPage from './Menu/Menu';
import LoginPage from './Loginpage/LoginPage';
import OrderOnlinePage from './OrderOnlinePage/OrderOnlinePage';


function Main() {
  const size = useWindowSize();
  const isVisible = !(size.width! < 900);

  return (
    <main data-testid="main">
      <Routes>
        <Route
          index
          path="/"
          element={
            <>
              <Landing isVisible={isVisible}/>
              <Specials />
              <Testimonials isVisible={isVisible} />
              <About isVisible={isVisible}/>
            </>
          }
        />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </main>
  )
}

export default Main;