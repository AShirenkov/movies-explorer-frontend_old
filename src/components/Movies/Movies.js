import './Movies.css';

import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { movies } from '../../utils/movies';

function Movies({ isLoggedIn, width }) {
  //   const [moviesList, setMoviesList] = useState({});
  //   useEffect(() => {
  //     setMoviesList(movies);
  //   }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className='content'>
        <SearchForm />
        <MoviesCardList moviesList={movies} width={width} />
      </main>
      <Footer />
    </>
  );
}
export default Movies;
