import StudentService from '../../services/studentService';

// Action Types
export const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
export const GET_STUDENT_BY_ID = 'GET_STUDENT_BY_ID';
export const GET_STUDENT_BY_REGISTER_NUMBER = 'GET_STUDENT_BY_REGISTER_NUMBER';
export const CREATE_STUDENT = 'CREATE_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';


// Get all students
export const fetchAllStudents = () => async dispatch => {
  try {
    const data = await StudentService.getAllStudents();
    dispatch({ type: GET_ALL_STUDENTS, payload: data });
  } catch (error) {
    console.error('Error fetching all students:', error);
  }
};



// Get student by ID
export const fetchStudentById = (id) => async dispatch => {
  try {
    const data = await StudentService.getStudentById(id);
    dispatch({ type: GET_STUDENT_BY_ID, payload: data });
  } catch (error) {
    console.error(`Error fetching student with ID ${id}:`, error);
  }
};



// Get student by reg no
export const fetchStudentByRegNo = (id) => async dispatch => {
    try {
      const data = await StudentService.getStudentByRegisterNumber(id);
      dispatch({ type: GET_STUDENT_BY_REGISTER_NUMBER, payload: data });
    } catch (error) {
      console.error(`Error fetching student with reg no ${id}:`, error);
    }
  };





// Create new student
export const createStudent = (studentData) => async dispatch => {
  try {
    const data = await StudentService.addStudent(studentData);
    dispatch({ type: CREATE_STUDENT, payload: data });
  } catch (error) {
    console.error('Error creating new student:', error);
  }
};

// Update student
export const updateStudent = (id, updatedData) => async dispatch => {
  try {
    const data = await StudentService.updateStudent(id, updatedData);
    dispatch({ type: UPDATE_STUDENT, payload: data });
  } catch (error) {
    console.error(`Error updating student: ${id}:`, error);
  }
};

// Delete student
export const deleteStudent = (id) => async dispatch => {
  try {
    await StudentService.deleteStudent(id);
    dispatch({ type: DELETE_STUDENT, payload: id });
  } catch (error) {
    console.error(`Error deleting student : ${id}:`, error);
  }
};
