import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { baseUrl } from '../../utils/constants';

function MoviesCardList({ moviesList }) {
  function onAddClick() {
    console.log('else pressed');
  }
  return (
    <section className='movies'>
      <div className='movies__list'>
        {moviesList.map(movieCard => (
          <MoviesCard
            key={movieCard.id}
            name={movieCard.nameRU}
            duration={movieCard.duration}
            imgLink={`${baseUrl}${movieCard.image.url}`}
          />
        ))}
      </div>
      <button className='movies__add-button opacity-button' onClick={onAddClick}>
        Ещё
      </button>
    </section>
  );
}
export default MoviesCardList;
