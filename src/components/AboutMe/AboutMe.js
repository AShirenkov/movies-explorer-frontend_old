import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/photo.png';
function AboutMe() {
  return (
    <section className='about'>
      <h2 className='about__title'>Студент</h2>
      <hr className='about__line' />
      <div className='about__card'>
        <img src={myPhoto} alt='Фотография Александра' className='about__photo' />
        <div className='about__description'>
          <p className='about__name'>Александр</p>
          <p className='about__profession'>Фронтенд-разработчик, 38 лет</p>
          <p className='about__story'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
            в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href='https://github.com/AShirenkov'
            target='_blank'
            className='about__link about__git opacity-button'
          >
            Github
          </a>
        </div>
      </div>

      {/* <h2 className='portfolio__title'>Портфолио</h2>
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
      </ul> */}
    </section>
  );
}
export default AboutMe;
