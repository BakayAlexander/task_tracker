import { GET_COLORS_FAILURE, GET_COLORS_REQUEST, GET_COLORS_SUCCESS } from '../actions/getColorsActios';

const initialState = {
  colorsLoading: true,
  colorsError: null,
  colors: null,
};

const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COLORS_REQUEST:
      return { ...state, colorsLoading: true };
    case GET_COLORS_SUCCESS:
      return {
        ...state,
        colorsLoading: false,
        colorsError: null,
        colors: action.res.data,
        totalPages: action.res.total_pages,
      };
    case GET_COLORS_FAILURE:
      return { ...state, allUsersLoading: false, allUsersError: action.error };

    default:
      return state;
  }
};

export default colorsReducer;
