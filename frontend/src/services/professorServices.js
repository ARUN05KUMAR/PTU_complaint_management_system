import axios from 'axios'

const PROFFESSOR_API_URL = "http://localhost:5000/api/professors";

class Professor {
    async getAllProfessors(){
        const response = await axios.get(`${PROFFESSOR_API_URL}/`);
        return response.data;
    }

    async getProffesorById(id){
        const response = await axios.get(`${PROFFESSOR_API_URL}/${id}`);
        return response.data;
    }

    async getProffesorByEmail(email){
        const response = await axios.get(`${PROFFESSOR_API_URL}/email/${email}`);
        return response.data;
    }

    async addProfessor(details){
        const response = await axios.post(`${PROFFESSOR_API_URL}/`,details);
        return response.data;
    }

    async updateProfessor(id,details){
        const response = await axios.put(`${PROFFESSOR_API_URL}/${id}`,details);
        return response.data;
    }

    
    async deleteProfessor(id){
        const response = await axios.delete(`${PROFFESSOR_API_URL}/${id}`);
        return response.data;
    }
}

const ProfessorService = new Professor();
export default ProfessorService;