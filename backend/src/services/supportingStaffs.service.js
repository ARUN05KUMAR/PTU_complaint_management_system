const supportingStaffsRepo = require("../repositories/supportingStaffs.repository");

class supportingStaffsService {
    async getAllsupportingStaffs(){
        return await supportingStaffsRepo.findAll();
    }

    async getsupportingStaffsById(id){
        return await supportingStaffsRepo.findById(id);
    }

    async getsupportingStaffsByEmail(email){
        return await supportingStaffsRepo.findByColumn('email',email);
    }

    async addNewsupportingStaffs(supportingStaffsDetails)
    {
        return await supportingStaffsRepo.create(supportingStaffsDetails);
    }

    async deletesupportingStaffs(id)
    {
        return await supportingStaffsRepo.delete(id);
    }

    async updatesupportingStaffs(id,supportingStaffsDetails)
    {
        return await supportingStaffsRepo.update(id,supportingStaffsDetails);
    }
}

module.exports = new supportingStaffsService();