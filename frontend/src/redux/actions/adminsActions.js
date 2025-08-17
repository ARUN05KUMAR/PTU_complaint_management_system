import AdminService from '../../services/adminService';

// Action Types
export const GET_ALL_ADMINS = 'GET_ALL_ADMINS';
export const GET_ADMIN_BY_ID = 'GET_ADMIN_BY_ID';
export const CREATE_ADMIN = 'CREATE_ADMIN';
export const UPDATE_ADMIN = 'UPDATE_ADMIN';
export const DELETE_ADMIN = 'DELETE_ADMIN';


// Get all admins
export const fetchAllAdmins = () => async dispatch => {
  try {
    const data = await AdminService.getAllAdmin();
    dispatch({ type: GET_ALL_ADMINS, payload: data });
  } catch (error) {
    console.error('Error fetching all Admins:', error);
  }
};



// Get admins by ID
export const fetchAdminById = (id) => async dispatch => {
  try {
    const data = await AdminService.getAdminById(id);
    dispatch({ type: GET_ADMIN_BY_ID, payload: data });
  } catch (error) {
    console.error(`Error fetching Admin with ID ${id}:`, error);
  }
};





// Create new admins
export const createAdmin = (adminData) => async dispatch => {
  try {
    const data = await AdminService.addAdmin(adminData);
    dispatch({ type: CREATE_ADMIN, payload: data });
  } catch (error) {
    console.error('Error creating new Admin:', error);
  }
};

// Update admins
export const updateAdmin = (id, updatedData) => async dispatch => {
  try {
    const data = await AdminService.updateAdmin(id, updatedData);
    dispatch({ type: UPDATE_ADMIN, payload: data });
  } catch (error) {
    console.error(`Error updating Admin: ${id}:`, error);
  }
};

// Delete admins
export const deleteAdmin = (id) => async dispatch => {
  try {
    await AdminService.deleteAdmin(id);
    dispatch({ type: DELETE_ADMIN, payload: id });
  } catch (error) {
    console.error(`Error deleting Admin : ${id}:`, error);
  }
};
