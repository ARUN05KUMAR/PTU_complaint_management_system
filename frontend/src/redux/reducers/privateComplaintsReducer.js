import {
GET_ALL_PRIVATE_COMPLAINTS,
GET_PRIVATE_COMPLAINT_BY_ID,    
LIKE_PRIVATE_COMPLAINT,
DISLIKE_PRIVATE_COMPLAINT,    
CREATE_PRIVATE_COMPLAINT,
UPDATE_PRIVATE_COMPLAINT_STATUS,
UPDATE_PRIVATE_COMPLAINT_SOLUTION,
DELETE_PRIVATE_COMPLAINT
} from '../actions/privateComplaintActions';

const initialState = {
  privateComplaints: [],
  selectedComplaint: null,
};

const privateComplaintReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRIVATE_COMPLAINTS:
      return {
        ...state,
        privateComplaints: action.payload,
      };

    case GET_PRIVATE_COMPLAINT_BY_ID:
      return {
        ...state,
        selectedComplaint: action.payload,
      };

    case CREATE_PRIVATE_COMPLAINT:
      return {
        ...state,
        privateComplaints: [...state.privateComplaints, action.payload],
      };

    case UPDATE_PRIVATE_COMPLAINT_STATUS:
      return {
        ...state,
        privateComplaints: state.privateComplaints.map(c =>
          c._id === action.payload._id ? action.payload : c
        ),
      };

      case UPDATE_PRIVATE_COMPLAINT_SOLUTION:
      return {
        ...state,
        privateComplaints: state.privateComplaints.map(c =>
          c._id === action.payload._id ? action.payload : c
        ),
      };

    case DELETE_PRIVATE_COMPLAINT:
      return {
        ...state,
        privateComplaints: state.privateComplaints.filter(c => c._id !== action.payload),
      };

    // Case for liking a complaint
    case LIKE_PRIVATE_COMPLAINT:
      return {
        ...state,
        privateComplaints: state.privateComplaints.map(c =>
          c._id === action.payload._id
            ? { ...c, likes: c.likes + 1 } // Assuming 'likes' is the count of likes
            : c
        ),
      };

    // Case for disliking a complaint
    case DISLIKE_PRIVATE_COMPLAINT:
      return {
        ...state,
        privateComplaints: state.privateComplaints.map(c =>
          c._id === action.payload._id
            ? { ...c, dislikes: c.dislikes + 1 } // Assuming 'dislikes' is the count of dislikes
            : c
        ),
      };

    default:
      return state;
  }
};

export default privateComplaintReducer;
