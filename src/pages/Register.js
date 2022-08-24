import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../store/actions/userActions';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let localToken = localStorage.getItem('token');

  const handleRegisterUser = () => {
    dispatch(
      registerUser({
        email: 'eve.holt@reqres.in',
        password: 'persist',
      }),
    ).then(res => {
      if (res) {
        navigate('/login');
      }
    });
  };

  useEffect(() => {
    if (localToken) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <div>Register</div>
      <button onClick={handleRegisterUser}>Register</button>
    </>
  );
};

export default Register;
