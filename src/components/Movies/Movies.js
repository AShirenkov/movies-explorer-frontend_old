import React from 'react';

import Header from '../Header/Header';
import './Movies.css';

function Movies({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
    </>
  );
}
export default Movies;
