import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Main>
        <Header />
        <Nav />
        <Footer />
      </Main>
    </>
  );
}

export default App;
