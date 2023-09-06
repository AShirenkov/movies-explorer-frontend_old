import React from 'react';
import './Promo.css';
import logo from '../../images/landing-logo.svg';

function Promo() {
  return (
    <section className='promo'>
      <h2 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h2>
      <img src={logo} alt='Логотип промоблока' className='promo__logo' />
    </section>
  );
}
export default Promo;
