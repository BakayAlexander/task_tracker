import React, { useEffect, useState } from 'react';
import { BiExit } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logoutUser } from '../../store/actions/userActions';

import styles from './header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    first_name: 'Alexander',
    last_name: 'Bakay',
    avatar: 'https://reqres.in/img/faces/4-image.jpg',
    id: '1',
    email: 'bakay.dvr@gmail.com',
  };

  const [currentUser, setCurrentUser] = useState(initialState);
  const localStorageUser = JSON.parse(localStorage.getItem('user'));

  const handleLogoutUser = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  //! This useEffect needed only case, when during session user goes to localStorage and removing user item
  useEffect(() => {
    if (!localStorageUser) return;
    setCurrentUser(localStorageUser);
  }, []);

  return (
    <header>
      <a
        href='/'
        className='link'
      >
        Task Tracker
      </a>
      <div className={styles.headerContainer}>
        <div className={styles.headerUserInfo}>
          <p>{`${currentUser.first_name} ${currentUser.last_name}`}</p>
          <p>{currentUser.email}</p>
        </div>
        <a
          className='link'
          href='/user'
        >
          <img
            className={styles.headerUserImage}
            src={currentUser.avatar}
            alt='Profile icon'
          />
        </a>
        <button
          onClick={handleLogoutUser}
          className='link'
        >
          <BiExit className='h-7 w-7' />
        </button>
      </div>
    </header>
  );
};

export default Header;
