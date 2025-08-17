const {DataTypes}=require('sequelize');
const sequelize=require('../config/db.config');

const Students = sequelize.define('Students',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    registerNumber:{
        type:DataTypes.BIGINT,
        unique: true,
        allowNull: false
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
    degree:{
        type:DataTypes.ENUM('Btech','Mtech','Phd'),
        allowNull: false
    },
    department:{
        type:DataTypes.ENUM('CSE','ECE','IT','EIE','EEE','CHE','CE','ME','MT'),
        allowNull: false
    },
    batch:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports=Students;