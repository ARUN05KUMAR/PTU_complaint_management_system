import SupportingStaffService from '../../services/supportingStaffService';

// Action Types
export const GET_ALL_SUPPORTINGSTAFFS = 'GET_ALL_SUPPORTINGSTAFFS';
export const GET_SUPPORTINGSTAFF_BY_ID = 'GET_SUPPORTINGSTAFF_BY_ID';
export const CREATE_SUPPORTINGSTAFF = 'CREATE_SUPPORTINGSTAFF';
export const UPDATE_SUPPORTINGSTAFF = 'UPDATE_SUPPORTINGSTAFF';
export const DELETE_SUPPORTINGSTAFF = 'DELETE_SUPPORTINGSTAFF';


// Get all supporting staffs
export const fetchAllSupportingStaffs = () => async dispatch => {
  try {
    const data = await SupportingStaffService.getAllSupportingStaffs();
    dispatch({ type: GET_ALL_SUPPORTINGSTAFFS, payload: data });
  } catch (error) {
    console.error('Error fetching all Supporting staff:', error);
  }
};



// Get supporting staff by ID
export const fetchSupportingStaffById = (id) => async dispatch => {
  try {
    const data = await SupportingStaffService.getSupportingStaffById(id);
    dispatch({ type: GET_SUPPORTINGSTAFF_BY_ID, payload: data });
  } catch (error) {
    console.error(`Error fetching Supporting staff with ID ${id}:`, error);
  }
};





// Create new supporting staff
export const createSupportingStaff = (supportingStaffData) => async dispatch => {
  try {
    const data = await SupportingStaffService.addSupportingStaff(supportingStaffData);
    dispatch({ type: CREATE_SUPPORTINGSTAFF, payload: data });
  } catch (error) {
    console.error('Error creating new Supporting staff:', error);
  }
};

// Update supporting staff
export const updateSupportingStaff = (id, updatedData) => async dispatch => {
  try {
    const data = await SupportingStaffService.updateSupportingStaff(id, updatedData);
    dispatch({ type: UPDATE_SUPPORTINGSTAFF, payload: data });
  } catch (error) {
    console.error(`Error updating Supporting staff: ${id}:`, error);
  }
};

// Delete supporting staff
export const deleteSupportingStaff = (id) => async dispatch => {
  try {
    await SupportingStaffService.deleteSupportingStaff(id);
    dispatch({ type: DELETE_SUPPORTINGSTAFF, payload: id });
  } catch (error) {
    console.error(`Error deleting Supporting staff : ${id}:`, error);
  }
};
