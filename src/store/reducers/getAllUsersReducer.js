import { GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from '../actions/getAllUsersAction';

const initialState = {
  allUsersLoading: true,
  allUsersError: null,
  totalPages: null,
  allUsers: null,
};

const getAllUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, allUsersLoading: true };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        allUsersLoading: false,
        allUsersError: null,
        allUsers: action.res.data,
        totalPages: action.res.total_pages,
      };
    case GET_USERS_FAILURE:
      return { ...state, allUsersLoading: false, allUsersError: action.error };

    default:
      return state;
  }
};

export default getAllUsersReducer;
