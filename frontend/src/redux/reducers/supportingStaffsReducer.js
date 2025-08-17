import {
    GET_ALL_SUPPORTINGSTAFFS,
    GET_SUPPORTINGSTAFF_BY_ID,
    CREATE_SUPPORTINGSTAFF,
    UPDATE_SUPPORTINGSTAFF,
    DELETE_SUPPORTINGSTAFF   
      } from '../actions/supportingStaffsActions';

const initialState = {
  supportingStaffs: [],
  selectedSupportingStaffs: null,
};

const supportingStaffReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SUPPORTINGSTAFFS:
      return {
        ...state,
        supportingStaffs: action.payload,
      };

    case GET_SUPPORTINGSTAFF_BY_ID:
      return {
        ...state,
        selectedSupportingStaffs: action.payload,
      };

    case CREATE_SUPPORTINGSTAFF:
      return {
        ...state,
        supportingStaffs: [...state.supportingStaffs, action.payload],
      };

    case UPDATE_SUPPORTINGSTAFF:
      return {
        ...state,
        supportingStaffs: state.supportingStaffs.map(c =>
          c._id === action.payload._id ? action.payload : c
        ),
      };

    case DELETE_SUPPORTINGSTAFF:
      return {
        ...state,
        supportingStaffs: state.supportingStaffs.filter(c => c._id !== action.payload),
      };

    default:
      return state;
  }
};

export default supportingStaffReducer;
