//import React from 'react';
import React, { useContext, useEffect } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile() {
  const {
    register,

    formState: { errors, isValid },
    handleSubmit,
    reset,
    setValue
  } = useForm({
    mode: 'onBlur'
  });

  const currentUser = useContext(CurrentUserContext);
  const onSubmit = data => reset();

  useEffect(() => {
    setValue('name', currentUser.name);
    setValue('email', currentUser.email);
  }, [currentUser]);
  return (
    <>
      <Header />
      <div className='profile'>
        <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>

        <form onSubmit={handleSubmit(onSubmit)} className='profile__form'>
          <div className='profile__input-container'>
            <p className='profile__input-label'>Имя</p>
            <input
              type='text'
              className='profile__input profile__input_type_name'
              placeholder='Имя'
              //   value={`${currentUser.name}`}
              {...register('name', {
                required: 'Поле обязательно к заполнению.',
                minLength: {
                  value: 3,
                  message: 'Введите имя длинной от 3 символов'
                }
              })}
            />
            <div className='profile__input-error'>
              {errors?.name && <p className='profile__input-error-text'>{errors?.name?.message}</p>}
            </div>
          </div>

          <div className='profile__input-container'>
            <p className='profile__input-label'>E-mail</p>
            <input
              type='text'
              className='profile__input'
              placeholder='E-mail'
              //   value={`${currentUser.email}`}
              {...register('email', {
                required: 'Поле обязательно к заполнению.',
                pattern: {
                  value:
                    // eslint-disable-next-line
                    /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
                  message: 'Введенный  E-mail не допустим.'
                }
              })}
            />
            <div className='profile__input-error'>
              {errors?.email && (
                <p className='profile__input-error-text'>{errors?.email?.message}</p>
              )}
            </div>
          </div>

          <button
            type='submit'
            disabled={!isValid}
            className='profile__button profile__button_type_edit'
          >
            Редактировать
          </button>

          <button
            type='button'
            disabled={!isValid}
            className='profile__button profile__button_type_exit'
          >
            Выйти из аккаунта
          </button>
        </form>
      </div>
    </>
  );
}
export default Profile;
