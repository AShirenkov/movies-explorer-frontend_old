import './PopupNavi.css';
import logo from '../../images/profile.svg';
import { Link, useLocation } from 'react-router-dom';

import React from 'react';
function PopupNavi({ isPopup }) {
  const currentLocation = useLocation();
  const isMovies = currentLocation.pathname === '/movies';
  const isSavedMovies = currentLocation.pathname === '/saved-movies';
  const isMain = currentLocation.pathname === '/';
  return (
    <div className='popup-navi'>
      <div className='popup-navi__movies-container'>
        <Link
          className={`popup-navi__text ${
            isMovies ? 'popup-navi__text_type_active' : 'popup-navi__text_type_inactive'
          }`}
          to='/movies'
        >
          Фильмы
        </Link>
        <Link
          className={`popup-navi__text ${
            isSavedMovies ? 'popup-navi__text_type_active' : 'popup-navi__text_type_inactive'
          }`}
          to='/saved-movies'
        >
          Сохраненные фильмы
        </Link>
      </div>

      <Link className='popup-navi__account' to='/profile'>
        <p className='popup-navi__account-text'>Аккаунт</p>
        <img
          src={logo}
          alt='Иконка аккаунта'
          className={`popup-navi__account-logo ${
            isMain ? 'popup-navi__account-logo_type_main' : 'popup-navi__account-logo_type_other'
          }`}
        />
      </Link>
    </div>
  );
}

export default PopupNavi;
