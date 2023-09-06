import logo from '../../images/logo.svg';
import './Header.css';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import { Link, useLocation } from 'react-router-dom';

import React from 'react';
function Header() {
  const currentLocation = useLocation();
  const isMain = currentLocation.pathname === '/';
  return (
    <header className='header'>
      <Link className='header__link' to='/'>
        <img src={logo} alt='Лого Место Россия' className='header__logo' />
      </Link>

      <HeaderLogin />
    </header>
  );
}

export default Header;
