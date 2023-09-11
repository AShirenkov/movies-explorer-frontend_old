// import React from 'react';
import { useState, useEffect } from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { baseUrl } from '../../utils/constants';

function MoviesCardList({ moviesList }) {
  const [countCards, setCountCards] = useState(16);
  const [isMoviesFinished, setIsMoviesFinished] = useState(false);
  const countCardForAddition = 4; //временно число. потом можно оптимизировать в зависимости от разрешения и таребований по количеству карточек

  useEffect(() => {
    if (moviesList.length < countCards) {
      setIsMoviesFinished(true);
    }
  }, []);

  function onAddClick() {
    if (moviesList.length < countCards + countCardForAddition) {
      setIsMoviesFinished(true);
      setCountCards(moviesList.length);
    } else {
      setCountCards(countCards + countCardForAddition);
    }
  }
  return (
    <section className='movies'>
      <div className='movies__list'>
        {moviesList.slice(0, countCards).map(movieCard => (
          <MoviesCard
            key={movieCard.id}
            name={movieCard.nameRU}
            duration={movieCard.duration}
            imgLink={`${baseUrl}${movieCard.image.url}`}
          />
        ))}
      </div>
      {!isMoviesFinished && (
        <button className='movies__add-button opacity-button' onClick={onAddClick}>
          Ещё
        </button>
      )}
    </section>
  );
}
export default MoviesCardList;
