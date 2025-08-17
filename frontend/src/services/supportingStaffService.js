import axios from 'axios'

const SUPPORTING_STAFF_URL = "http://localhost:5000/api/supportingStaffs";

class SupportingStaff {
    async getAllSupportingStaffs(){
        const response = await axios.get(`${SUPPORTING_STAFF_URL}/`);
        return response.data;
    }

    async getSupportingStaffById(id){
        const response = await axios.get(`${SUPPORTING_STAFF_URL}/${id}`);
        return response.data;
    }

    async getSupportingStaffByEmail(email){
        const response = await axios.get(`${SUPPORTING_STAFF_URL}/email/${email}`);
        return response.data;
    }

    async addSupportingStaff(details){
        const response = await axios.post(`${SUPPORTING_STAFF_URL}/`,details);
        return response.data;
    }

    async updateSupportingStaff(id,details){
        const response = await axios.put(`${SUPPORTING_STAFF_URL}/${id}`,details);
        return response.data;
    }

    
    async deleteSupportingStaff(id){
        const response = await axios.delete(`${SUPPORTING_STAFF_URL}/${id}`);
        return response.data;
    }
}

const SupportingStaffService = new SupportingStaff();
export default SupportingStaffService;