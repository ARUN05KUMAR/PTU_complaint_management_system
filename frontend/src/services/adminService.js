import axios from 'axios'

const ADMIN_API_URL = "http://localhost:5000/api/admins";

class Admin {
    async getAllAdmin(){
        const response = await axios.get(`${ADMIN_API_URL}/`);
        return response.data;
    }

    async getAdminById(id){
        const response = await axios.get(`${ADMIN_API_URL}/${id}`);
        return response.data;
    }

    async getAdminByEmail(email){
        const response = await axios.get(`${ADMIN_API_URL}/email/${email}`);
        return response.data;
    }

    async addAdmin(details){
        const response = await axios.post(`${ADMIN_API_URL}`,details);
        return response.data;
    }

    async updateAdmin(id,details){
        const response = await axios.put(`${ADMIN_API_URL}/${id}`,details);
        return response.data;
    }

    
    async deleteAdmin(id){
        const response = await axios.delete(`${ADMIN_API_URL}/${id}`);
        return response.data;
    }
}

const AdminService = new Admin();
export default AdminService;