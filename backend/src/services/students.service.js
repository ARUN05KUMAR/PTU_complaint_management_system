const studentsRepo = require("../repositories/students.repository");

class studentsService {
    async getAllStudents(){
        return await studentsRepo.findAll();
    }

    async getStudentsById(id){
        return await studentsRepo.findById(id);
    }

    async getStudentByReg(reg){
        return await studentsRepo.findByColumn("registerNumber",reg);
    }

    async getStudentByEmail(email){
        return await studentsRepo.findByColumn("email",email);
    }

    async addNewStudent(studentdetail)
    {
        return await studentsRepo.create(studentdetail);
    }

    async deleteStudent(id)
    {
        return await studentsRepo.delete(id);
    }

    async updateStudent(id,studentDetails)
    {
        return await studentsRepo.update(id,studentDetails);
    }
}

module.exports = new studentsService();