const { where } = require("sequelize");
const Professors = require("../models/professors.model");
class ProfessorsRepository {
    async findAll() {
        return await Professors.findAll();
    }

    async findById(id) {
        return await Professors.findByPk(id);
    }

    async findByColumn(columnName,value){
        return await Professors.findOne({
            where: {
                [columnName]:value,
            },
        });
    }

    async create(professorDetails){
        return await Professors.create(professorDetails);
    }
    async update(id,professorDetails){
        return await Professors.update(professorDetails,{where: {id}});
    }
    async delete(id){
        return await Professors.destroy({where: {id}});
    }
}
module.exports =new ProfessorsRepository();