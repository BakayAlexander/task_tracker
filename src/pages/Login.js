import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import { loginUser } from '../store/actions/userActions';

import { validation } from '../utils/validation';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginError = useSelector(state => state.user.loginUserError);
  const isLoading = useSelector(state => state.user.loginUserLoading);

  const initialValues = { email: '', password: '' };

  const handleSubmitLogin = values => {
    dispatch(
      loginUser({
        email: values.email,
        password: values.password,
      })
    ).then(res => {
      if (res) {
        navigate('/');
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
        onSubmit={values => handleSubmitLogin(values)}
      >
        <Form className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14 md:min-w-[450px]'>
          <h1 className='text-4xl font-semibold'>Log in</h1>
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
            className='auth__button '
            type='submit'
            disabled={isLoading}
          >
            Log in
          </button>
          {loginError && (
            <p className='auth__error text-center text-[17px]'>{loginError}</p>
          )}

          <div className='text-[gray]'>
            Have not registered yet?
            <button
              className='text-white hover:underline ml-1'
              type='submit'
              disabled={isLoading}
              onClick={() => {
                navigate('/register');
              }}
            >
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default Login;
