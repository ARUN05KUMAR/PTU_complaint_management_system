import axios from 'axios'

const PUBLIC_COMPLAINT_API_URL = "http://localhost:5000/api/publicComplaints";

class PublicComplaint {
    async getAllPublicComplaints(){
        const response = await axios.get(`${PUBLIC_COMPLAINT_API_URL}/`);
        return response.data;
    }


    async getAllStudentsPublicComplaints(){
        const response = await axios.get(`${PUBLIC_COMPLAINT_API_URL}/students`);
        return response.data;
    }

    async getAllProfessorsPublicComplaints(){
        const response = await axios.get(`${PUBLIC_COMPLAINT_API_URL}/professors`);
        return response.data;
    }

    async getAllSupportingStaffsPublicComplaints(){
        const response = await axios.get(`${PUBLIC_COMPLAINT_API_URL}/supportingStaffs`);
        return response.data;
    }



    async getPublicComplaintById(id){
        const response = await axios.get(`${PUBLIC_COMPLAINT_API_URL}/${id}`);
        return response.data;
    }

    async getAllPublicComplaintOfIndividualStudent(studentId){
        const response = await axios.get(`${PUBLIC_COMPLAINT_API_URL}/students/${studentId}`);
        return response.data;
    }

    async getAllPublicComplaintOfIndividualProfessor(professorId){
        const response = await axios.get(`${PUBLIC_COMPLAINT_API_URL}/professors/${professorId}`);
        return response.data;
    }

    async getAllPublicComplaintOfIndividualSupportingStaff(supportinStaffId){
        const response = await axios.get(`${PUBLIC_COMPLAINT_API_URL}/supportingStaffs/${supportinStaffId}`);
        return response.data;
    }



    async likePublicComplaint(id){
        const response = await axios.put(`${PUBLIC_COMPLAINT_API_URL}/like/${id}`);
        return response.data;
    }

    async dislikePublicComplaint(id){
        const response = await axios.put(`${PUBLIC_COMPLAINT_API_URL}/dislike/${id}`);
        return response.data;
    }



    async addPublicComplaint(details){
        const response = await axios.post(`${PUBLIC_COMPLAINT_API_URL}/`,details);
        return response.data;
    }

    async updatePublicComplaint(id,details){
        const response = await axios.put(`${PUBLIC_COMPLAINT_API_URL}/${id}`,details);
        return response.data;
    }

    
    async deletePublicComplaint(id){
        const response = await axios.delete(`${PUBLIC_COMPLAINT_API_URL}/${id}`);
        return response.data;
    }
}

const PublicComplaintService = new PublicComplaint();
export default PublicComplaintService;