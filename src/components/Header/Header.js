import logo from '../../images/logo.svg';
import './Header.css';

import React from 'react';
function Header() {
  return (
    <header className='header'>
      <img src={logo} alt='Лого Место Россия' className='header__logo' />
      <p>&copy; 2023 Mesto Russia</p>
    </header>
  );
}

export default Header;
