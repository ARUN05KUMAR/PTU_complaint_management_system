const { where } = require("sequelize");
const PublicComplaintsComments = require("../models/publicComplaintsComments.model");
class PublicComplaintsCommentsRepository {
    async findAll() {
        return await PublicComplaintsComments.findAll();
    }
    async findByColumn(columnName,value){
        return await PublicComplaintsComments.findAll({
            where: {
                [columnName]:value,
            },
        });
    }
    async incrementValue(columnName,value){
        return await PublicComplaintsComments.increment(columnName,{
            by:1,
            where:{ id:value}
        });
    }
    async findById(id) {
        return await PublicComplaintsComments.findByPk(id);
    }
    async create(CommentDetails){
        return await PublicComplaintsComments.create(CommentDetails);
    }
    async update(id,CommentDetails){
        return await PublicComplaintsComments.update(CommentDetails,{where: {id}});
    }
    async delete(id){
        return await PublicComplaintsComments.destroy({where: {id}});
    }
}
module.exports =new PublicComplaintsCommentsRepository();