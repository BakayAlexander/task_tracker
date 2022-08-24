import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../store/actions/userActions';

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <section className="w-full flex flex-col items-center gap-4">
      <h2 className="text-xl my-20">Hello, Michael!</h2>
      <div className="flex justify-between w-1/5 border-b border-white/25 pb-1">
        <p className="text-[#b3b3b3]">Name</p>
        <p>Michael</p>
      </div>
      <div className="flex justify-between w-1/5 border-b border-white/25 pb-1">
        <p className="text-[#b3b3b3]">Email</p>
        <p>mail@mail.com</p>
      </div>
      <div className="profile__button-container">
        <button className="link mt-10" onClick={handleLogoutUser}>
          Log out
        </button>
      </div>
    </section>
  );
};

export default User;
