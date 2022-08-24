import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../store/actions/userActions';

const Home = () => {
  const dispatch = useDispatch();

  const handleRegisterUser = () => {
    dispatch(
      registerUser({
        email: 'eve.holt@reqres.in',
        password: 'persist',
      }),
    );
  };

  const handleLoginUser = () => {
    dispatch(
      loginUser({
        email: 'eve.holt@reqres.in',
        password: 'persist',
      }),
    );
  };

  return (
    <>
      <div>Home</div>
      <button onClick={handleRegisterUser}>Register</button>
      <button onClick={handleLoginUser}>Login</button>
    </>
  );
};

export default Home;
