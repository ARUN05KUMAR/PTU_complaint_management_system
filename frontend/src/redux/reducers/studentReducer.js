import {
    GET_ALL_STUDENTS,
    GET_STUDENT_BY_ID,
    GET_STUDENT_BY_REGISTER_NUMBER,
    CREATE_STUDENT,
    UPDATE_STUDENT,
    DELETE_STUDENT
    } from '../actions/studentsActions';

const initialState = {
  students: [],
  selectedStudent: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };

    case GET_STUDENT_BY_ID:
      return {
        ...state,
        selectedStudent: action.payload,
      };

    case GET_STUDENT_BY_REGISTER_NUMBER:
      return {
          ...state,
          selectedStudent: action.payload,
      };

    case CREATE_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map(c =>
          c._id === action.payload._id ? action.payload : c
        ),
      };

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(c => c._id !== action.payload),
      };

    default:
      return state;
  }
};

export default studentReducer;
