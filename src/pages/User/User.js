import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logoutUser } from '../../store/actions/userActions';

import styles from './user.module.css';

const User = () => {
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

  //! This useEffect needed only case, when during session user goes to localStorage and removing user item
  useEffect(() => {
    if (!localStorageUser) return;
    setCurrentUser(localStorageUser);
  }, []);

  const handleLogoutUser = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <section className={styles.user}>
      <h2 className={styles.userTitle}>{`Hello, ${
        currentUser.first_name || 'Alexander'
      }!`}</h2>
      <div className={styles.userInfoContainer}>
        <p className={styles.userInfoLabel}>Name</p>
        <p>
          {`${currentUser.first_name} ${currentUser.last_name}` ||
            'Alexander Bakay'}
        </p>
      </div>
      <div className={styles.userInfoContainer}>
        <p className={styles.userInfoLabel}>Email</p>
        <p>{currentUser.email || 'mail@mail.com'}</p>
      </div>
      <div className={styles.userButtonContainer}>
        <button
          className='link'
          onClick={() => {
            navigate('/');
          }}
        >
          Back to main
        </button>
        <button
          className='link mt-5'
          onClick={handleLogoutUser}
        >
          Log out
        </button>
      </div>
    </section>
  );
};

export default User;
