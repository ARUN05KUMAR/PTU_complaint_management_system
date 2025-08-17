import {
  GET_ALL_PUBLIC_COMPLAINTS,
  GET_ALL_PUBLIC_COMPLAINTS_BY_STUDENTS,
  GET_ALL_PUBLIC_COMPLAINTS_BY_PROFESSORS,
  GET_ALL_PUBLIC_COMPLAINTS_BY_SUPPORTING_STAFFS,
  GET_PUBLIC_COMPLAINT_BY_ID,
  GET_ALL_PUBLIC_COMPLAINT_OF_INDIVIDUAL_STUDENT,
  GET_ALL_PUBLIC_COMPLAINT_OF_INDIVIDUAL_PROFESSOR,
  GET_ALL_PUBLIC_COMPLAINT_OF_INDIVIDUAL_SUPPORTING_STAFF,
  CREATE_PUBLIC_COMPLAINT,
  LIKE_PUBLIC_COMPLAINT,
  DISLIKE_PUBLIC_COMPLAINT,
  UPDATE_PUBLIC_COMPLAINT,
  DELETE_PUBLIC_COMPLAINT
} from '../actions/publicComplaintActions';

const initialState = {
  publicComplaints: [],
  publicComplaintsByStudents: [],
  publicComplaintsByProfessors: [],
  publicComplaintsBySupportingStaffs: [],
  selectedComplaint: null,
};

const publicComplaintReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PUBLIC_COMPLAINTS:
      return {
        ...state,
        publicComplaints: action.payload,
      };

    case GET_ALL_PUBLIC_COMPLAINTS_BY_STUDENTS:
      return {
        ...state,
        publicComplaintsByStudents: action.payload,
      };

    case GET_ALL_PUBLIC_COMPLAINTS_BY_PROFESSORS:
      return {
        ...state,
        publicComplaintsByProfessors: action.payload,
      };

    case GET_ALL_PUBLIC_COMPLAINTS_BY_SUPPORTING_STAFFS:
      return {
        ...state,
        publicComplaintsBySupportingStaffs: action.payload,
      };

    case GET_PUBLIC_COMPLAINT_BY_ID:
      return {
        ...state,
        selectedComplaint: action.payload,
      };

    case GET_ALL_PUBLIC_COMPLAINT_OF_INDIVIDUAL_STUDENT:
      return {
        ...state,
        publicComplaints: action.payload,
      };

    case GET_ALL_PUBLIC_COMPLAINT_OF_INDIVIDUAL_PROFESSOR:
      return {
        ...state,
        publicComplaints: action.payload,
      };

    case GET_ALL_PUBLIC_COMPLAINT_OF_INDIVIDUAL_SUPPORTING_STAFF:
      return {
        ...state,
        publicComplaints: action.payload,
      };

    case CREATE_PUBLIC_COMPLAINT:
      return {
        ...state,
        publicComplaints: [...state.publicComplaints, action.payload],
      };

    case UPDATE_PUBLIC_COMPLAINT:
      return {
        ...state,
        publicComplaints: state.publicComplaints.map(c =>
          c._id === action.payload._id ? action.payload : c
        ),
      };

    case DELETE_PUBLIC_COMPLAINT:
      return {
        ...state,
        publicComplaints: state.publicComplaints.filter(c => c._id !== action.payload),
      };

    // Case for liking a complaint
    case LIKE_PUBLIC_COMPLAINT:
      return {
        ...state,
        publicComplaints: state.publicComplaints.map(c =>
          c._id === action.payload._id
            ? { ...c, likes: c.likes + 1 } // Assuming 'likes' is the count of likes
            : c
        ),
      };

    // Case for disliking a complaint
    case DISLIKE_PUBLIC_COMPLAINT:
      return {
        ...state,
        publicComplaints: state.publicComplaints.map(c =>
          c._id === action.payload._id
            ? { ...c, dislikes: c.dislikes + 1 } // Assuming 'dislikes' is the count of dislikes
            : c
        ),
      };

    default:
      return state;
  }
};

export default publicComplaintReducer;
