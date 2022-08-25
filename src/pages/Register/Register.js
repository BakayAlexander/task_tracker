import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { registerUser } from '../../store/actions/userActions';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validation } from '../../utils/validation';

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
    <section className='auth'>
      <Formik
        initialValues={initialValues}
        validate={values => validation(values)}
        onSubmit={values => handleSubmitRegister(values)}
      >
        <Form className='authForm'>
          <h1 className='authHeader'>Register</h1>
          <div className='space-y-4'>
            <label className='authLabel'>
              <Field
                className='authInput'
                type='email'
                name='email'
                placeholder='Email'
              />
            </label>
            <ErrorMessage
              className='authError'
              name='email'
              component='div'
            />
            <label className='authLabel'>
              <Field
                className='authInput'
                type='password'
                name='password'
                placeholder='Password'
              />
            </label>
            <ErrorMessage
              className='authError'
              name='password'
              component='div'
            />
          </div>
          <button
            className='authButton bg-[#9f546e] hover:bg-[#6a1633]'
            type='submit'
            disabled={isLoading}
          >
            Register
          </button>
          {registerError && (
            <p className='authError text-center text-[17px]'>{registerError}</p>
          )}

          <div className='text-[gray]'>
            Already a member?
            <button
              className='authLinkButton'
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
