import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { registerUser } from '../store/actions/userActions';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validation } from '../utils/validation';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const localToken = localStorage.getItem('token');

  const registerError = useSelector(state => state.user.createUserError);
  const isLoading = useSelector(state => state.user.createUserLoading);

  const initialValues = { email: '', password: '' };

  useEffect(() => {
    if (localToken) {
      navigate('/');
    }
  }, []);

  const handleSubmitRegister = values => {
    dispatch(
      registerUser({
        email: values.email,
        password: values.password,
      })
    ).then(res => {
      if (res) {
        navigate('/login');
      }
    });
  };

  return (
    <section
      className='relative flex h-screen w-screen flex-col bg-black md:items-center justify-center
     md:bg-transparent'
    >
      <Formik
        initialValues={initialValues}
        validate={values => validation(values)}
        onSubmit={values => handleSubmitRegister(values)}
      >
        <Form className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14 md:min-w-[450px]'>
          <h1 className='text-4xl font-semibold'>Register</h1>
          <div className='space-y-4'>
            <label className='inline-block w-full'>
              <Field
                className='auth__input'
                type='email'
                name='email'
                placeholder='Email'
              />
            </label>
            <ErrorMessage
              className='auth__error'
              name='email'
              component='div'
            />
            <label className='inline-block w-full'>
              <Field
                className='auth__input'
                type='password'
                name='password'
                placeholder='Password'
              />
            </label>
            <ErrorMessage
              className='auth__error'
              name='password'
              component='div'
            />
          </div>
          <button
            className='auth__button bg-[#9f546e] hover:bg-[#6a1633]'
            type='submit'
            disabled={isLoading}
          >
            Register
          </button>
          {registerError && (
            <p className='auth__error text-center text-[17px]'>
              {registerError}
            </p>
          )}

          <div className='text-[gray]'>
            Already a member?
            <button
              className='text-white hover:underline ml-1'
              type='submit'
              disabled={isLoading}
              onClick={() => {
                navigate('/login');
              }}
            >
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default Register;
