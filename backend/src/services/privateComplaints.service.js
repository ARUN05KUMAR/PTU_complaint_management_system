const privateComplaintsRepo = require("../repositories/privateComplaints.repository");

class privateComplaintsService {
    async getAllPrivateComplaints(){
        return await privateComplaintsRepo.findAll();
    }

    async getPrivateComplaintById(id){
        return await privateComplaintsRepo.findById(id);
    }

    async addNewPrivateComplaint(complaintDetails)
    {
        return await privateComplaintsRepo.create(complaintDetails);
    }

    async like(id)
        {
            return await privateComplaintsRepo.incrementValue("likes",id);
        }
        
        async dislike(id)
        {
            return await privateComplaintsRepo.incrementValue("dislikes",id);
        }


    async updateStatus(id,status)
    {
        return await privateComplaintsRepo.update(id,status);
    }

    async deletePrivateComplaint(id)
    {
        return await privateComplaintsRepo.delete(id);
    }
}

module.exports = new privateComplaintsService();