const {DataTypes}=require('sequelize');
const sequelize=require('../config/db.config');

const Professors = sequelize.define('Professors',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    gender:{
        type: DataTypes.ENUM('male','female','other'),
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull: false
    },
    type:{
        type:DataTypes.ENUM('professor','associateProfessor','assistantProfessor'),
        allowNull:false
    },
    employmentType:{
        type:DataTypes.ENUM('permanent','temproary'),
        allowNull:false
    },
    department:{
        type:DataTypes.ENUM('CSE','ECE','IT','EIE','EEE','CHE','CE','ME','MT','HS'),
        allowNull: false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports=Professors;