import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../store/actions/userActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginError = useSelector(state => state.user.loginUserError);
  const isLoading = useSelector(state => state.user.loginUserLoading);
  const initialValues = { email: '', password: '' };

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
            loginUser({
              email: values.email,
              password: values.password,
            }),
          ).then(res => {
            if (res) {
              navigate('/');
            }
          });
        }}
      >
        <Form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14 md:min-w-[450px]">
          <h1 className="text-4xl font-semibold">Log in</h1>
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
          <button type="submit" disabled={isLoading} className="auth__button ">
            Log in
          </button>
          {loginError && <p className="auth__error text-center text-[17px]">{loginError}</p>}

          <div className="text-[gray]">
            Have not registered yet?
            <button
              type="submit"
              disabled={isLoading}
              className="text-white hover:underline ml-1"
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
