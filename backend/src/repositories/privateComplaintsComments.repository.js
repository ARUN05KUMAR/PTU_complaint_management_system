const { where } = require("sequelize");
const PrivateComplaintsComments = require("../models/privateComplaintsComments");
class PrivateComplaintsCommentsRepository {
    async findAll() {
        return await PrivateComplaintsComments.findAll();
    }
    async findByColumn(columnName,value){
        return await PrivateComplaintsComments.findAll({
            where: {
                [columnName]:value,
            },
        });
    }
    async incrementValue(columnName,value){
        return await PrivateComplaintsComments.increment(columnName,{
            by:1,
            where:{ id:value}
        });
    }
    async findById(id) {
        return await PrivateComplaintsComments.findByPk(id);
    }
    async create(CommentDetails){
        return await PrivateComplaintsComments.create(CommentDetails);
    }
    async update(id,CommentDetails){
        return await PrivateComplaintsComments.update(CommentDetails,{where: {id}});
    }
    async delete(id){
        return await PrivateComplaintsComments.destroy({where: {id}});
    }
}
module.exports =new PrivateComplaintsCommentsRepository();