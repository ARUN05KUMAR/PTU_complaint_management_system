const { where } = require("sequelize");
const Students = require("../models/students.model");
class StudentsRepository {
    async findAll() {
        return await Students.findAll();
    }

    async findById(id) {
        return await Students.findByPk(id);
    }

    async findByColumn(columnName,value){
        return await Students.findOne({
            where: {
                [columnName]:value,
            },
        });
    }

    async create(studentDetails){
        return await Students.create(studentDetails);
    }
    async update(id,studentDetails){
        return await Students.update(studentDetails,{where: {id}});
    }
    async delete(id){
        return await Students.destroy({where: {id}});
    }
}
module.exports =new StudentsRepository();