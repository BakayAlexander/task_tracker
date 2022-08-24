import axiosApi from '../../utils/api/axiosApi';

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const allUsersRequest = () => ({ type: GET_USERS_REQUEST });
export const allUsersSuccess = res => ({ type: GET_USERS_SUCCESS, res });
export const allUsersFailure = error => ({ type: GET_USERS_FAILURE, error });

export const getAllUsers = (page = 1) => {
  return async dispatch => {
    try {
      dispatch(allUsersRequest());
      const response = await axiosApi.get(`/api/users?page=${page}`);
      dispatch(allUsersSuccess(response.data));
    } catch (error) {
      console.log(error);
      if (error.response) {
        dispatch(allUsersFailure(error.response.data));
      } else {
        dispatch(allUsersFailure({ error: 'Network error or no internet' }));
      }
    }
  };
};
