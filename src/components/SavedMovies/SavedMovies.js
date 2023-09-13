import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { moviesSaved } from '../../utils/moviesSaved';

import './SavedMovies.css';

function SavedMovies({ isLoggedIn, isBurger, countCard }) {
  //   const [moviesList, setMoviesList] = useState({});
  //   useEffect(() => {
  //     setMoviesList(moviesSaved);
  //   }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} isBurger={isBurger} />
      <main className='content'>
        <SearchForm />
        <MoviesCardList moviesList={moviesSaved} countCard={countCard} />
      </main>
      <Footer />
    </>
  );
}
export default SavedMovies;
