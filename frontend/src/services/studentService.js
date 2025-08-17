import axios from 'axios'

const STUDENT_API_URL = "http://localhost:5000/api/students";

class Student {
    async getAllStudents(){
        const response = await axios.get(`${STUDENT_API_URL}/`);
        return response.data;
    }

    async getStudentById(id){
        const response = await axios.get(`${STUDENT_API_URL}/${id}`);
        return response.data;
    }

    async getStudentByRegisterNumber(regno){
        const response = await axios.get(`${STUDENT_API_URL}/registerNumber/${regno}`);
        return response.data;
    }

    async getStudentByEmail(email){
        const response = await axios.get(`${STUDENT_API_URL}/email/${email}`);
        return response.data;
    }

    async addStudent(details){
        const response = await axios.post(`${STUDENT_API_URL}/`,details);
        return response.data;
    }

    async updateStudent(id,details){
        const response = await axios.put(`${STUDENT_API_URL}/${id}`,details);
        return response.data;
    }

    
    async deleteStudent(id){
        const response = await axios.delete(`${STUDENT_API_URL}/${id}`);
        return response.data;
    }
}

const StudentService = new Student();
export default StudentService;