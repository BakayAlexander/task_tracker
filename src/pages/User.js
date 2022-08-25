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

  const currentUser = JSON.parse(localStorage.getItem('user'));
  //! I'm not using useEffect here for put default values in the case when user deleting a user item from localStorage (look Header.js)
  return (
    <section className="w-full flex flex-col items-center gap-4">
      <h2 className="text-xl my-20">{`Hello, ${currentUser.first_name || 'Alexander'}!`}</h2>
      <div className="flex justify-between w-1/5 border-b border-white/25 pb-1">
        <p className="text-[#b3b3b3]">Name</p>
        <p>{`${currentUser.first_name} ${currentUser.last_name}` || 'Alexander Bakay'}</p>
      </div>
      <div className="flex justify-between w-1/5 border-b border-white/25 pb-1">
        <p className="text-[#b3b3b3]">Email</p>
        <p>{currentUser.email || 'mail@mail.com'}</p>
      </div>
      <div className="flex flex-col mt-10">
        <button
          className="link"
          onClick={() => {
            navigate('/');
          }}
        >
          Back to main
        </button>
        <button className="link mt-5" onClick={handleLogoutUser}>
          Log out
        </button>
      </div>
    </section>
  );
};

export default User;
