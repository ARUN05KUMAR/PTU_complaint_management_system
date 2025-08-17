const professorsRepo = require("../repositories/professors.repository");

class professorsService {
    async getAllProfessors(){
        return await professorsRepo.findAll();
    }

    async getProfessorsById(id){
        return await professorsRepo.findById(id);
    }

    async getProfessorByEmail(email){
            return await professorsRepo.findByColumn("email",email);
    }

    async addNewProfessor(professorDetails)
    {
        return await professorsRepo.create(professorDetails);
    }

    async deleteProfessor(id)
    {
        return await professorsRepo.delete(id);
    }

    async updateProfessor(id,professorDetails)
    {
        return await professorsRepo.update(id,professorDetails);
    }
}

module.exports = new professorsService();