import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../store/actions/userActions';
import { BiExit } from 'react-icons/bi';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <header>
      <a href="/" className="link">
        Task Tracker
      </a>
      <div className="flex items-center space-x-2 md:space-x-10">
        <div className="flex flex-col text-[#b3b3b3] text-sm">
          <p className="hidden md:inline">Michael Lawson</p>
          <p>email@mail.com</p>
        </div>
        <a href="/user" className="link">
          <img
            src="https://reqres.in/img/faces/8-image.jpg"
            alt="Profile icon"
            className="cursor-pointer rounded h-10 w-10"
          />
        </a>
        <button onClick={handleLogoutUser} className="link">
          <BiExit className="h-7 w-7" />
        </button>
      </div>
    </header>
  );
};

export default Header;
