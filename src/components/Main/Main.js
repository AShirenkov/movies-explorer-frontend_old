import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import AboutMe from '../AboutMe/AboutMe';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import './Main.css';
function Main() {
  return (
    <main className='content'>
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      {/* <section className='profiles'>
        <div className='profile'>
          <div className='profile__common'>
            <div className='profile__avatar'>
              <button
                type='submit'
                onClick={onEditProfile}
                className='profile__avatar-button opacity-button'
                style={{ backgroundImage: `url(${currentUser.avatar})` }}
              />
            </div>

            <div className='profile__info'>
              <h1 className='profile__name'>{currentUser.name}</h1>
              <h2 className='profile__descr'>{currentUser.about}</h2>
              <button
                type='button'
                onClick={onEditAvatar}
                className='profile__edit-button opacity-button'
              />
            </div>
          </div>
          <button
            type='button'
            onClick={onAddPlace}
            className='profile__card-add-button opacity-button'
          />
        </div>
      </section>

      <section className='cards'>
        {cards.map(card => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section> */}
    </main>
  );
}
export default Main;
