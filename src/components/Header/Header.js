import logo from '../../images/logo.svg';
import './Header.css';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import { Link, useLocation } from 'react-router-dom';

import React from 'react';
import HeaderNavi from '../HeaderNavi/HeaderNavi';
function Header({ isLoggedIn }) {
  const currentLocation = useLocation();
  const isMain = currentLocation.pathname === '/';
  return (
    <header className={`header ${isMain ? 'header_background_full' : 'header_background_clear'} `}>
      <Link className='header__link' to='/'>
        <img src={logo} alt='Лого Место Россия' className='header__logo' />
      </Link>
      {!isLoggedIn ? <HeaderLogin /> : <HeaderNavi />}
    </header>
  );
}

export default Header;
