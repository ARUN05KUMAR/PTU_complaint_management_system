const adminsRepo = require("../repositories/admins.repository");

class adminService {
    async getadmins(){
        return await adminsRepo.findAll();
    }

    async getadminById(id){
        return await adminsRepo.findById(id);
    }

    async getadminByEmail(email){
        return await adminsRepo.findByColumn('email',email);
    }

    async addNewadmin(adminDetails)
    {
        return await adminsRepo.create(adminDetails);
    }

    async deleteadmin(id)
    {
        return await adminsRepo.delete(id);
    }

    async updateadmin(id,adminDetails)
    {
        return await adminsRepo.update(id,adminDetails);
    }
}

module.exports = new adminService();