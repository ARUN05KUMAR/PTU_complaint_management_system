const { where } = require("sequelize");
const PublicComplaints = require("../models/publicComplaints.model");
class PublicComplaintsRepository {
    async findAll() {
        return await PublicComplaints.findAll();
    }

    async findAllExposeNotSolved() {
        return await PublicComplaints.findAll({
            where:{
                expose:'yes',
                status:'pending'||'inProgress'
        }});
    }
    async findAllExposeSolved() {
        return await PublicComplaints.findAll({
            where:{
                expose:'yes',
                status:'solved'||'rejected'
        }});
    }


    async findByColumn(columnName,value){
        return await PublicComplaints.findAll({
            where: {
                [columnName]:value,
            },
        });
    }
    async findByTypeAndId(columnName1,value1,columnName2,value2){
        return await PublicComplaints.findAll({
            where:{
                [columnName1]:value1,
                [columnName2]:value2
            }
        });
    }

    async incrementValue(columnName,value){
        return await PublicComplaints.increment(columnName,{
            by:1,
            where:{ id:value}
        });
    }
    async findById(id) {
        return await PublicComplaints.findByPk(id);
    }
    async create(ComplaintDetails){
        return await PublicComplaints.create(ComplaintDetails);
    }
    async update(id,ComplaintDetails){
        return await PublicComplaints.update(ComplaintDetails,{where: {id}});
    }

    async delete(id){
        return await PublicComplaints.destroy({where: {id}});
    }
}
module.exports =new PublicComplaintsRepository();