import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import AboutMe from '../AboutMe/AboutMe';
import Techs from '../Techs/Techs';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Header from '../Header/Header';
import './Main.css';

import Footer from '../Footer/Footer';

function Main({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className='content'>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
export default Main;
