import React from 'react';
import './Portfolio.css';
function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a
            href='https://ashirenkov.github.io/how-to-learn/'
            target='_blank'
            className='portfolio__link'
          >
            <p className='portfolio__text'>Статичный сайт</p>
            <p className='portfolio__text'>&#x2197;</p>
          </a>
        </li>
        <hr className='portfolio__line' noshade />
        <li className='portfolio__item portfolio__text_pointer'>
          <a
            href='https://ashirenkov.github.io/russian-travel/'
            target='_blank'
            className='portfolio__link'
          >
            <p className='portfolio__text'>Адаптивный сайт</p>
            <p className='portfolio__text portfolio__text_pointer'>&#x2197;</p>
          </a>
        </li>
        <hr className='portfolio__line' />
        <li className='portfolio__item'>
          <a
            href='https://ashirenkov.github.io/mesto-react/'
            target='_blank'
            className='portfolio__link'
          >
            <p className='portfolio__text'>Одностраничное приложение</p>
            <p className='portfolio__text portfolio__text_pointer'>&#x2197;</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
