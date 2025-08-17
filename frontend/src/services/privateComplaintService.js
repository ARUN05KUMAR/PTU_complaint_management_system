import axios from 'axios'

const PRIVATE_COMMPLAINT_API_URL = "http://localhost:5000/api/privateComplaints";

class PrivateComplaint {
    async getAllPrivateComplaints(){
        const response = await axios.get(`${PRIVATE_COMMPLAINT_API_URL}/`);
        return response.data;
    }


    async getPrivateComplaintById(id){
        const response = await axios.get(`${PRIVATE_COMMPLAINT_API_URL}/${id}`);
        return response.data;
    }


    async likePrivateComplaint(id){
        const response = await axios.put(`${PRIVATE_COMMPLAINT_API_URL}/like/${id}`);
        return response.data;
    }

    async dislikePrivateComplaint(id){
        const response = await axios.put(`${PRIVATE_COMMPLAINT_API_URL}/dislike/${id}`);
        return response.data;
    }



    async addPrivateComplaint(details){
        const response = await axios.post(`${PRIVATE_COMMPLAINT_API_URL}/`,details);
        return response.data;
    }


    async updatePrivateComplaintStatus(id,details){
        const response = await axios.put(`${PRIVATE_COMMPLAINT_API_URL}/status/${id}`,details);
        return response.data;
    }

    async updatePrivateComplaintSolution(id,details){
        const response = await axios.put(`${PRIVATE_COMMPLAINT_API_URL}/solution/${id}`,details);
        return response.data;
    }

    
    async deletePrivateComplaint(id){
        const response = await axios.delete(`${PRIVATE_COMMPLAINT_API_URL}/${id}`);
        return response.data;
    }
}

const PrivateComplaintService = new PrivateComplaint();
export default PrivateComplaintService;