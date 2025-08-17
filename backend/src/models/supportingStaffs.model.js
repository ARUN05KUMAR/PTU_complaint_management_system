const {DataTypes}=require('sequelize');
const sequelize=require('../config/db.config');

const SupportingStaffs = sequelize.define('SupportingStaffs',{
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
        type:DataTypes.ENUM('administrativeStaff','technicalStaff','maintenanceStaff','hostelStaff'),
        allowNull:false
    },
    employmentType:{
        type:DataTypes.ENUM('permanent','temproary'),
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports=SupportingStaffs;