import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../store/actions/userActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginUser = () => {
    dispatch(
      loginUser({
        email: 'eve.holt@reqres.in',
        password: 'persist',
      }),
    ).then(res => {
      if (res) {
        navigate('/');
      }
    });
  };

  return (
    <>
      <div>Login</div>
      <button onClick={handleLoginUser}>Login</button>
    </>
  );
};

export default Login;
