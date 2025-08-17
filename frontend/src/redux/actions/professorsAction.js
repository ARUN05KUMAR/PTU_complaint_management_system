import ProfessorService from '../../services/professorServices';

// Action Types
export const GET_ALL_PROFESSORS = 'GET_ALL_PROFESSORS';
export const GET_PROFESSOR_BY_ID = 'GET_PROFESSOR_BY_ID';
export const CREATE_PROFESSOR = 'CREATE_PROFESSOR';
export const UPDATE_PROFESSOR = 'UPDATE_PROFESSOR';
export const DELETE_PROFESSOR = 'DELETE_PROFESSOR';


// Get all professors
export const fetchAllProfessors = () => async dispatch => {
  try {
    const data = await ProfessorService.getAllProfessors();
    dispatch({ type: GET_ALL_PROFESSORS, payload: data });
  } catch (error) {
    console.error('Error fetching all professors:', error);
  }
};



// Get professor by ID
export const fetchProfessorById = (id) => async dispatch => {
  try {
    const data = await ProfessorService.getProffesorById(id);
    dispatch({ type: GET_PROFESSOR_BY_ID, payload: data });
  } catch (error) {
    console.error(`Error fetching professor with ID ${id}:`, error);
  }
};





// Create new professor
export const createProfessor = (professorData) => async dispatch => {
  try {
    const data = await ProfessorService.addProfessor(professorData);
    dispatch({ type: CREATE_PROFESSOR, payload: data });
  } catch (error) {
    console.error('Error creating new professor:', error);
  }
};

// Update professor
export const updateProfessor = (id, updatedData) => async dispatch => {
  try {
    const data = await ProfessorService.updateProfessor(id, updatedData);
    dispatch({ type: UPDATE_PROFESSOR, payload: data });
  } catch (error) {
    console.error(`Error updating professor: ${id}:`, error);
  }
};

// Delete professor
export const deleteProfessor = (id) => async dispatch => {
  try {
    await ProfessorService.deleteProfessor(id);
    dispatch({ type: DELETE_PROFESSOR, payload: id });
  } catch (error) {
    console.error(`Error deleting professor : ${id}:`, error);
  }
};
