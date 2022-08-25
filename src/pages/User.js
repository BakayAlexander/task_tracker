import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logoutUser } from '../store/actions/userActions';

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
    <section className='w-full flex flex-col items-center gap-4'>
      <h2 className='text-xl my-20'>{`Hello, ${
        currentUser.first_name || 'Alexander'
      }!`}</h2>
      <div className='flex justify-between w-1/5 border-b border-white/25 pb-1'>
        <p className='text-[#b3b3b3]'>Name</p>
        <p>
          {`${currentUser.first_name} ${currentUser.last_name}` ||
            'Alexander Bakay'}
        </p>
      </div>
      <div className='flex justify-between w-1/5 border-b border-white/25 pb-1'>
        <p className='text-[#b3b3b3]'>Email</p>
        <p>{currentUser.email || 'mail@mail.com'}</p>
      </div>
      <div className='flex flex-col mt-10'>
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
