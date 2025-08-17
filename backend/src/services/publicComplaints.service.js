const publicComplaintsRepo = require("../repositories/publicComplaints.repository");

class publicComplaintsService {
    async getAllComplaints(){
        return await publicComplaintsRepo.findAll();
    }

    async getAllExposeNotSolvedComplaints(){
        return await publicComplaintsRepo.findAllExposeNotSolved();
    }

    async getAllExposeSolvedComplaints(){
        return await publicComplaintsRepo.findAllExposeSolved();
    }
    
    async getAllComplaintsByStudents(){
        return await publicComplaintsRepo.findByColumn('issuedBy','student')
    }
    async getAllComplaintsByProfessors(){
        return await publicComplaintsRepo.findByColumn('issuedBy','professor')
    }
    async getAllComplaintsBySupportingStaffs(){
        return await publicComplaintsRepo.findByColumn('issuedBy','supportingStaff')
    }

    async getAllComplaintsByIndividualStudent(id){
        return await publicComplaintsRepo.findByTypeAndId('issuedBy','student','issuerId',id);
    }

    async getAllComplaintsByIndividualProfessor(id){
        return await publicComplaintsRepo.findByTypeAndId('issuedBy','professor','issuerId',id);
    }

    async getAllComplaintsByIndividualSupportingStaff(id){
        return await publicComplaintsRepo.findByTypeAndId('issuedBy','supportingStaff','issuerId',id);
    }

    async getComplaintById(id){
        return await publicComplaintsRepo.findById(id);
    }

    async addNewComplaint(complaintDetails)
    {
        return await publicComplaintsRepo.create(complaintDetails);
    }

    async like(id)
    {
        return await publicComplaintsRepo.incrementValue("likes",id);
    }
    
    async dislike(id)
    {
        return await publicComplaintsRepo.incrementValue("dislikes",id);
    }

    async deleteComplaint(id)
    {
        return await publicComplaintsRepo.delete(id);
    }

    async updateComplaint(id,complaintDetails)
    {
        return await publicComplaintsRepo.update(id,complaintDetails);
    }
}

module.exports = new publicComplaintsService();