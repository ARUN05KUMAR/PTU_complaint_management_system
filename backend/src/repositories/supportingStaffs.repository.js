const { where } = require("sequelize");
const SupportingStaffs = require("../models/supportingStaffs.model");
class SupportingStaffsRepository {
    async findAll() {
        return await SupportingStaffs.findAll();
    }

    async findById(id) {
        return await SupportingStaffs.findByPk(id);
    }

    async findByColumn(columnName,value){
        return await SupportingStaffs.findOne({
            where: {
                [columnName]:value,
            },
        });
    }

    async create(supportingStaffsDetails){
        return await SupportingStaffs.create(supportingStaffsDetails);
    }
    async update(id,supportingStaffsDetails){
        return await SupportingStaffs.update(supportingStaffsDetails,{where: {id}});
    }
    async delete(id){
        return await SupportingStaffs.destroy({where: {id}});
    }
}
module.exports =new SupportingStaffsRepository();