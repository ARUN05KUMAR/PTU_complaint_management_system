import PrivateComplaintService from '../../services/privateComplaintService';

// Action Types
export const GET_ALL_PRIVATE_COMPLAINTS = 'GET_ALL_PRIVATE_COMPLAINTS';
export const GET_PRIVATE_COMPLAINT_BY_ID = 'GET_PRIVATE_COMPLAINT_BY_ID';
export const LIKE_PRIVATE_COMPLAINT = 'LIKE_PRIVATE_COMPLAINT';
export const DISLIKE_PRIVATE_COMPLAINT = 'DISLIKE_PRIVATE_COMPLAINT';
export const CREATE_PRIVATE_COMPLAINT = 'CREATE_PRIVATE_COMPLAINT';
export const UPDATE_PRIVATE_COMPLAINT_STATUS = 'UPDATE_PRIVATE_COMPLAINT_STATUS';
export const UPDATE_PRIVATE_COMPLAINT_SOLUTION = 'UPDATE_PRIVATE_COMPLAINT_SOLUTION';
export const DELETE_PRIVATE_COMPLAINT = 'DELETE_PRIVATE_COMPLAINT';



// Get all private complaints
export const fetchAllPrivateComplaints = () => async dispatch => {
  try {
    const data = await PrivateComplaintService.getAllPrivateComplaints();
    dispatch({ type: GET_ALL_PRIVATE_COMPLAINTS, payload: data });
  } catch (error) {
    console.error('Error fetching all private complaints:', error);
  }
};




// Get private complaint by ID
export const fetchPrivateComplaintById = (id) => async dispatch => {
  try {
    const data = await PrivateComplaintService.getPrivateComplaintById(id);
    dispatch({ type: GET_PRIVATE_COMPLAINT_BY_ID, payload: data });
  } catch (error) {
    console.error(`Error fetching private complaint with ID ${id}:`, error);
  }
};



// like private complaint
export const likePrivateComplaint = (id) => async dispatch => {
    try {
      const data = await PrivateComplaintService.likePrivateComplaint(id);
      dispatch({ type: LIKE_PRIVATE_COMPLAINT, payload: data });
    } catch (error) {
      console.error(`Error in Like private complaint with ID ${id}:`, error);
    }
  };

// dislike private complaint
export const dislikePrivateComplaint = (id) => async dispatch => {
    try {
      const data = await PrivateComplaintService.dislikePrivateComplaint(id);
      dispatch({ type: DISLIKE_PRIVATE_COMPLAINT, payload: data });
    } catch (error) {
      console.error(`Error in Dislike private complaint with ID ${id}:`, error);
    }
  };




// Create new private complaint
export const createPrivateComplaint = (complaintData) => async dispatch => {
  try {
    const data = await PrivateComplaintService.addPrivateComplaint(complaintData);
    dispatch({ type: CREATE_PRIVATE_COMPLAINT, payload: data });
  } catch (error) {
    console.error('Error creating private complaint:', error);
  }
};

// Update private complaint
export const updatePrivateComplaintStatus = (id, updatedData) => async dispatch => {
  try {
    const data = await PrivateComplaintService.updatePrivateComplaintStatus(id, updatedData);
    dispatch({ type: UPDATE_PRIVATE_COMPLAINT_STATUS, payload: data });
  } catch (error) {
    console.error(`Error updating private complaint status with ID ${id}:`, error);
  }
};
export const updatePrivateComplaintSolution = (id, updatedData) => async dispatch => {
    try {
      const data = await PrivateComplaintService.updatePrivateComplaintSolution(id, updatedData);
      dispatch({ type: UPDATE_PRIVATE_COMPLAINT_SOLUTION, payload: data });
    } catch (error) {
      console.error(`Error updating private complaint solution with ID ${id}:`, error);
    }
  };

// Delete private complaint
export const deletePrivateComplaint = (id) => async dispatch => {
  try {
    await PrivateComplaintService.deletePublicComplaint(id);
    dispatch({ type: DELETE_PRIVATE_COMPLAINT, payload: id });
  } catch (error) {
    console.error(`Error deleting private complaint with ID ${id}:`, error);
  }
};
