import {
    GET_ALL_ADMINS,
    GET_ADMIN_BY_ID,
    CREATE_ADMIN,
    UPDATE_ADMIN,
    DELETE_ADMIN,
        } from '../actions/adminsActions';

const initialState = {
  admins: [],
  selectedAdmin: null,
};

const adminsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ADMINS:
      return {
        ...state,
        admins: action.payload,
      };

    case GET_ADMIN_BY_ID:
      return {
        ...state,
        selectedAdmin: action.payload,
      };

    case CREATE_ADMIN:
      return {
        ...state,
        admins: [...state.admins, action.payload],
      };

    case UPDATE_ADMIN:
      return {
        ...state,
        admins: state.admins.map(c =>
          c._id === action.payload._id ? action.payload : c
        ),
      };

    case DELETE_ADMIN:
      return {
        ...state,
        admins: state.admins.filter(c => c._id !== action.payload),
      };

    default:
      return state;
  }
};

export default adminsReducer;
