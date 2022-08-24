import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../store/actions/userActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localToken = localStorage.getItem('token');
  const registerError = useSelector(state => state.user.createUserError);
  const isLoading = useSelector(state => state.user.createUserLoading);
  const initialValues = { email: '', password: '' };

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
    <section
      className="relative flex h-screen w-screen flex-col bg-black md:items-center justify-center
     md:bg-transparent"
    >
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Required';
          } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
          }
          return errors;
        }}
        onSubmit={values => {
          dispatch(
            registerUser({
              email: values.email,
              password: values.password,
            }),
          ).then(res => {
            if (res) {
              navigate('/login');
            }
          });
        }}
      >
        <Form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14 md:min-w-[450px]">
          <h1 className="text-4xl font-semibold">Register</h1>
          <div className="space-y-4">
            <label className="inline-block w-full">
              <Field type="email" name="email" placeholder="Email" className="auth__input" />
            </label>
            <ErrorMessage name="email" component="div" className="auth__error" />
            <label className="inline-block w-full">
              <Field type="password" name="password" placeholder="Password" className="auth__input" />
            </label>
            <ErrorMessage name="password" component="div" className="auth__error" />
          </div>
          <button type="submit" disabled={isLoading} className="auth__button bg-[#9f546e] hover:bg-[#6a1633]">
            Register
          </button>
          {registerError && <p className="auth__error text-center text-[17px]">{registerError}</p>}

          <div className="text-[gray]">
            Already a member?
            <button
              type="submit"
              disabled={isLoading}
              className="text-white hover:underline ml-1"
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
