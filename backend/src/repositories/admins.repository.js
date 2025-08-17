const { where } = require("sequelize");
const Admins = require("../models/admins.model");
class AdminsRepository {
    async findAll() {
        return await Admins.findAll();
    }

    async findById(id) {
        return await Admins.findByPk(id);
    }

    async findByColumn(columnName,value){
        return await Admins.findOne({
            where: {
                [columnName]:value,
            },
        });
    }

    async create(adminDetails){
        return await Admins.create(adminDetails);
    }
    async update(id,adminDetails){
        return await Admins.update(adminDetails,{where: {id}});
    }
    async delete(id){
        return await Admins.destroy({where: {id}});
    }
}
module.exports =new AdminsRepository();