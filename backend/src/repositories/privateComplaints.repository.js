const { where } = require("sequelize");
const PrivateComplaints = require("../models/privateComplaints.model");
class PrivateComplaintsRepository {
    async findAll() {
        return await PrivateComplaints.findAll();
    }
    async findByColumn(columnName,value){
        return await PrivateComplaints.findOne({
            where: {
                [columnName]:value,
            },
        });
    }

    async incrementValue(columnName,value){
        return await PrivateComplaints.increment(columnName,{
            by:1,
            where:{ id:value}
        });
    }
    async findById(id) {
        return await PrivateComplaints.findByPk(id);
    }
    async create(ComplaintDetails){
        return await PrivateComplaints.create(ComplaintDetails);
    }
    async update(id,ComplaintDetails){
        return await PrivateComplaints.update(ComplaintDetails,{where: {id}});
    }
    async delete(id){
        return await PrivateComplaints.destroy({where: {id}});
    }
}
module.exports =new PrivateComplaintsRepository();