import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

import { moviesSaved } from '../../utils/moviesSaved';

import './SavedMovies.css';

function SavedMovies({ isLoggedIn }) {
  const [moviesList, setMoviesList] = useState({});
  useEffect(() => {
    setMoviesList(moviesSaved);
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className='content'>
        <SearchForm />
        <MoviesCardList moviesList={moviesSaved} />
      </main>
      <Footer />
    </>
  );
}
export default SavedMovies;