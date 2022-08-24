import axiosApi from '../../utils/api/axiosApi';

export const GET_COLORS_REQUEST = 'GET_COLORS_REQUEST';
export const GET_COLORS_SUCCESS = 'GET_COLORS_SUCCESS';
export const GET_COLORS_FAILURE = 'GET_COLORS_FAILURE';

export const colorRequest = () => ({ type: GET_COLORS_REQUEST });
export const colorsSuccess = res => ({ type: GET_COLORS_SUCCESS, res });
export const colorsFailure = error => ({ type: GET_COLORS_FAILURE, error });

export const getColors = (page = 1) => {
  return async dispatch => {
    try {
      dispatch(colorRequest());
      const response = await axiosApi.get(`api/unknown`);
      dispatch(colorsSuccess(response.data));
    } catch (error) {
      console.log(error);
      if (error.response) {
        dispatch(colorsFailure(error.response.data));
      } else {
        dispatch(colorsFailure({ error: 'Network error or no internet' }));
      }
    }
  };
};
