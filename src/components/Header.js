import React, { useEffect, useState } from 'react';
import { BiExit } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../store/actions/userActions';

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
      <a href="/" className="link">
        Task Tracker
      </a>
      <div className="flex items-center space-x-2 md:space-x-10">
        <div className="flex flex-col text-[#b3b3b3] text-sm">
          <p className="hidden md:inline">{`${currentUser.first_name} ${currentUser.last_name}`}</p>
          <p>{currentUser.email}</p>
        </div>
        <a href="/user" className="link">
          <img src={currentUser.avatar} alt="Profile icon" className="cursor-pointer rounded h-10 w-10" />
        </a>
        <button onClick={handleLogoutUser} className="link">
          <BiExit className="h-7 w-7" />
        </button>
      </div>
    </header>
  );
};

export default Header;
