import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import BookingPage from './components/BookingPage/BookingPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="*" element={<div />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;