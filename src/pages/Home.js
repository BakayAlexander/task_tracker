import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllUsers, logoutUser } from '../store/actions/userActions';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  const handleGetAllUsers = () => {
    dispatch(getAllUsers());
  };

  return (
    <>
      <div>Home</div>
      <button onClick={handleLogoutUser}>Logout</button>
      <button onClick={handleGetAllUsers}>Get all users</button>
    </>
  );
};

export default Home;
