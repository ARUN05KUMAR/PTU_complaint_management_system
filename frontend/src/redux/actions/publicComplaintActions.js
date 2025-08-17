import PublicComplaintService from '../../services/publicComplaintService';

// Action Types
export const GET_ALL_PUBLIC_COMPLAINTS = 'GET_ALL_PUBLIC_COMPLAINTS';
export const GET_ALL_EXPOSE_UNSOLVED_PUBLIC_COMPLAINTS = 'GET_ALL_EXPOSE_UNSOLVED_PUBLIC_COMPLAINTS';
export const GET_ALL_EXPOSE_SOLVED_PUBLIC_COMPLAINTS = 'GET_ALL_EXPOSE_SOLVED_PUBLIC_COMPLAINTS';

export const GET_ALL_PUBLIC_COMPLAINTS_BY_STUDENTS = 'GET_ALL_PUBLIC_COMPLAINTS_BY_STUDENTS';
export const GET_ALL_PUBLIC_COMPLAINTS_BY_PROFESSORS = 'GET_ALL_PUBLIC_COMPLAINTS_BY_PROFESSORS';
export const GET_ALL_PUBLIC_COMPLAINTS_BY_SUPPORTING_STAFFS = 'GET_ALL_PUBLIC_COMPLAINTS_BY_SUPPORTING_STAFFS';

export const GET_PUBLIC_COMPLAINT_BY_ID = 'GET_PUBLIC_COMPLAINT_BY_ID';

export const GET_ALL_PUBLIC_COMPLAINT_OF_INDIVIDUAL_STUDENT = 'GET_ALL_PUBLIC_COMPLAINT_OF_INDIVIDUAL_STUDENT';
export const GET_ALL_PUBLIC_COMPLAINT_OF_INDIVIDUAL_PROFESSOR = 'GET_ALL_PUBLIC_COMPLAINT_OF_INDIVIDUAL_PROFESSOR';
export const GET_ALL_PUBLIC_COMPLAINT_OF_INDIVIDUAL_SUPPORTING_STAFF = 'GET_ALL_PUBLIC_COMPLAINT_OF_INDIVIDUAL_SUPPORTING_STAFF';


export const LIKE_PUBLIC_COMPLAINT = 'LIKE_PUBLIC_COMPLAINT';
export const DISLIKE_PUBLIC_COMPLAINT = 'DISLIKE_PUBLIC_COMPLAINT';


export const CREATE_PUBLIC_COMPLAINT = 'CREATE_PUBLIC_COMPLAINT';
export const UPDATE_PUBLIC_COMPLAINT = 'UPDATE_PUBLIC_COMPLAINT';
export const DELETE_PUBLIC_COMPLAINT = 'DELETE_PUBLIC_COMPLAINT';



// Get all public complaints
export const fetchAllPublicComplaints = () => async dispatch => {
  try {
    const data = await PublicComplaintService.getAllPublicComplaints();
    dispatch({ type: GET_ALL_PUBLIC_COMPLAINTS, payload: data });
  } catch (error) {
    console.error('Error fetching all public complaints:', error);
  }
};


// Get all public complaints of students
export const fetchAllPublicComplaintsOfStudents = () => async dispatch => {
    try {
      const data = await PublicComplaintService.getAllStudentsPublicComplaints();
      dispatch({ type: GET_ALL_PUBLIC_COMPLAINTS_BY_STUDENTS, payload: data });
    } catch (error) {
      console.error('Error fetching all public complaints of students:', error);
    }
  };

// Get all public complaints of professors
export const fetchAllPublicComplaintsOfProfessors = () => async dispatch => {
    try {
      const data = await PublicComplaintService.getAllProfessorsPublicComplaints();
      dispatch({ type: GET_ALL_PUBLIC_COMPLAINTS_BY_PROFESSORS, payload: data });
    } catch (error) {
      console.error('Error fetching all public complaints of professors:', error);
    }
  };

// Get all public complaints of supporting Staffs
export const fetchAllPublicComplaintsOfSupportingStaffs = () => async dispatch => {
    try {
      const data = await PublicComplaintService.getAllSupportingStaffsPublicComplaints();
      dispatch({ type: GET_ALL_PUBLIC_COMPLAINTS_BY_SUPPORTING_STAFFS, payload: data });
    } catch (error) {
      console.error('Error fetching all public complaints of supporting staffs:', error);
    }
  };







// Get public complaint by ID
export const fetchPublicComplaintById = (id) => async dispatch => {
  try {
    const data = await PublicComplaintService.getPublicComplaintById(id);
    dispatch({ type: GET_PUBLIC_COMPLAINT_BY_ID, payload: data });
  } catch (error) {
    console.error(`Error fetching public complaint with ID ${id}:`, error);
  }
};

// Get all public complaints of individual student
export const fetchAllPublicComplaintsOfIndividualStudent = (id) => async dispatch => {
    try {
      const data = await PublicComplaintService.getAllPublicComplaintOfIndividualStudent(id);
      dispatch({ type: GET_ALL_PUBLIC_COMPLAINT_OF_INDIVIDUAL_STUDENT, payload: data });
    } catch (error) {
      console.error('Error fetching all public complaints of individual student:', error);
    }
  };

// Get all public complaints of individual professor
export const fetchAllPublicComplaintsOfIndividualProfessor = (id) => async dispatch => {
    try {
      const data = await PublicComplaintService.getAllPublicComplaintOfIndividualProfessor(id);
      dispatch({ type: GET_ALL_PUBLIC_COMPLAINT_OF_INDIVIDUAL_PROFESSOR, payload: data });
    } catch (error) {
      console.error('Error fetching all public complaints of individual professor:', error);
    }
  };

// Get all public complaints of individual supporting Staffs
export const fetchAllPublicComplaintsOfIndividualSupportingStaffs = (id) => async dispatch => {
    try {
      const data = await PublicComplaintService.getAllPublicComplaintOfIndividualSupportingStaff(id);
      dispatch({ type: GET_ALL_PUBLIC_COMPLAINT_OF_INDIVIDUAL_SUPPORTING_STAFF, payload: data });
    } catch (error) {
      console.error('Error fetching all public complaints of individual supporting staffs:', error);
    }
  };







// like public complaint
export const likePublicComplaint = (id) => async dispatch => {
    try {
      const data = await PublicComplaintService.likePublicComplaint(id);
      dispatch({ type: LIKE_PUBLIC_COMPLAINT, payload: data });
    } catch (error) {
      console.error(`Error in Like public complaint with ID ${id}:`, error);
    }
  };

// dislike public complaint
export const dislikePublicComplaint = (id) => async dispatch => {
    try {
      const data = await PublicComplaintService.dislikePublicComplaint(id);
      dispatch({ type: DISLIKE_PUBLIC_COMPLAINT, payload: data });
    } catch (error) {
      console.error(`Error in Dislike public complaint with ID ${id}:`, error);
    }
  };







// Create new public complaint
export const createPublicComplaint = (complaintData) => async dispatch => {
  try {
    const data = await PublicComplaintService.addPublicComplaint(complaintData);
    dispatch({ type: CREATE_PUBLIC_COMPLAINT, payload: data });
  } catch (error) {
    console.error('Error creating public complaint:', error);
  }
};

// Update public complaint
export const updatePublicComplaint = (id, updatedData) => async dispatch => {
  try {
    const data = await PublicComplaintService.updatePublicComplaint(id, updatedData);
    dispatch({ type: UPDATE_PUBLIC_COMPLAINT, payload: data });
  } catch (error) {
    console.error(`Error updating public complaint with ID ${id}:`, error);
  }
};

// Delete public complaint
export const deletePublicComplaint = (id) => async dispatch => {
  try {
    await PublicComplaintService.deletePublicComplaint(id);
    dispatch({ type: DELETE_PUBLIC_COMPLAINT, payload: id });
  } catch (error) {
    console.error(`Error deleting public complaint with ID ${id}:`, error);
  }
};
