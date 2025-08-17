import {
        GET_ALL_PROFESSORS,
        GET_PROFESSOR_BY_ID,
        CREATE_PROFESSOR,
        UPDATE_PROFESSOR,
        DELETE_PROFESSOR,
      } from '../actions/professorsAction';

const initialState = {
  professors: [],
  selectedProfessor: null,
};

const professorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROFESSORS:
      return {
        ...state,
        professors: action.payload,
      };

    case GET_PROFESSOR_BY_ID:
      return {
        ...state,
        selectedProfessor: action.payload,
      };

    case CREATE_PROFESSOR:
      return {
        ...state,
        professors: [...state.professors, action.payload],
      };

    case UPDATE_PROFESSOR:
      return {
        ...state,
        professors: state.professors.map(c =>
          c._id === action.payload._id ? action.payload : c
        ),
      };

    case DELETE_PROFESSOR:
      return {
        ...state,
        professors: state.professors.filter(c => c._id !== action.payload),
      };

    default:
      return state;
  }
};

export default professorReducer;
