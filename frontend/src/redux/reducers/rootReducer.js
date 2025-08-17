import { combineReducers } from 'redux';
import publicComplaintReducer from './publicComplaintReducer';
import studentReducer from './studentReducer';
import professorReducer from './professorsReducer';
import supportingStaffReducer from './supportingStaffsReducer';
import adminsReducer from './adminReducer';
import privateComplaintsReducer from './privateComplaintsReducer';

const rootReducer = combineReducers({
  student:studentReducer,
  professor:professorReducer,
  supportingStaff:supportingStaffReducer,
  admins:adminsReducer,
  publicComplaint: publicComplaintReducer,
  privateComplaints:privateComplaintsReducer,
});

export default rootReducer;
