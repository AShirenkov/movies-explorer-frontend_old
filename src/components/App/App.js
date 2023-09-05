import { useState, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { useNavigate, Navigate } from 'react-router-dom';

//import logo from './logo.svg';
//import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute
                element={Header}
                isLoggedIn={isLoggedIn}
                // onEditProfile={handleEditAvatarClick}
                // onAddPlace={handleAddPlaceClick}
                // onEditAvatar={handleEditProfileClick}
                // onCardClick={handleCardClick}
                // onCardLike={handleCardLike}
                // onCardDelete={handleCardDelete}
                // cards={cards}
              />
            }
          />

          {/* <Route path='/sign-up' element={<Register onRegister={handleRegister} />} />
          <Route path='/sign-in' element={<Login onLogin={handleLogin} />} /> */}

          <Route
            path='*'
            element={isLoggedIn ? <Navigate to='/' /> : <Navigate to='/sign-in' replace />}
          />
        </Routes>

        {/* <Header>test</Header> */}
        <Main />
        <Footer />
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
