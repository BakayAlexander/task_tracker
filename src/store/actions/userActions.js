import axiosApi from '../../utils/api/axiosApi';

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER';

export const createUserRequest = () => ({ type: CREATE_USER_REQUEST });
export const createUserSuccess = res => ({
  type: CREATE_USER_SUCCESS,
  res,
});
export const createUserFailure = error => ({
  type: CREATE_USER_FAILURE,
  error,
});

export const loginUserRequest = () => ({ type: LOGIN_USER_REQUEST });
export const loginUserSuccess = res => ({
  type: LOGIN_USER_SUCCESS,
  res,
});
export const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  error,
});

export const logoutUserRequest = () => ({ type: LOGOUT_USER });

export const registerUser = data => {
  return async dispatch => {
    try {
      dispatch(createUserRequest());
      const response = await axiosApi.post('/api/register', data);
      dispatch(createUserSuccess(response.data.token));
      return response;
    } catch (error) {
      console.log('Register failed: ', error);
      if (error.response) {
        dispatch(createUserFailure(error.response.data.error));
      } else {
        dispatch(createUserFailure({ error: 'Network error or no internet' }));
      }
    }
  };
};

export const loginUser = data => {
  return async dispatch => {
    try {
      dispatch(loginUserRequest());
      const response = await axiosApi.post('/api/login', data);
      //! This is a custom identification current user method. It exists only because of an api problems.
      const usersPageOne = await axiosApi.get(`/api/users?page=1`);
      const usersPageTwo = await axiosApi.get(`/api/users?page=1`);
      const allUsers = usersPageOne.data.data.concat(usersPageTwo.data.data);
      const currentUser = allUsers.filter(user => user.email === data.email)[0];
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(currentUser));
      dispatch(
        loginUserSuccess({ token: response.data.token, user: currentUser })
      );

      return response;
    } catch (error) {
      console.log('Login failed: ', error);
      if (error.response) {
        dispatch(loginUserFailure(error.response.data.error));
      } else {
        dispatch(loginUserFailure({ error: 'Network error or no internet' }));
      }
    }
  };
};

export const logoutUser = () => {
  return dispatch => {
    dispatch(logoutUserRequest());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };
};
