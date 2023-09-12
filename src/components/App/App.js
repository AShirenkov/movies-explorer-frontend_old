import { useState, useEffect, useWindowSize } from 'react';

import { Route, Routes } from 'react-router-dom';

import { useNavigate, Navigate } from 'react-router-dom';

// import { useWindowSize } from 'react-hooks';

//import logo from './logo.svg';
//import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [width, setWidth] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    setCurrentUser({ name: 'Виталий', email: 'pochta@yandex.ru' });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          {/* <Route
            path='/'
            element={
              <ProtectedRoute
                element={Main}
                isLoggedIn={isLoggedIn}
               
              />
            }
          /> */}
          <Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />
          {/* <Route path='/sign-up' element={<Register onRegister={handleRegister} />} />
          <Route path='/sign-in' element={<Login onLogin={handleLogin} />} /> */}

          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/profile' element={<Profile isLoggedIn={isLoggedIn} />} />
          <Route path='/movies' element={<Movies isLoggedIn={isLoggedIn} width={width} />} />
          <Route
            path='/saved-movies'
            element={<SavedMovies isLoggedIn={isLoggedIn} width={width} />}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

        {/* <Header>test</Header> */}
        {/* <Main /> */}
      </div>
    </CurrentUserContext.Provider>

    // <div className='App'>
    //   <header className='App-header'>
    //     <img src={logo} className='App-logo' alt='logo' />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className='App-link'
    //       href='https://reactjs.org'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
