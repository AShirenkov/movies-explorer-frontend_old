import React from 'react';

import Header from '../Header/Header';
import './SavedMovies.css';

function SavedMovies({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
    </>
  );
}
export default SavedMovies;
