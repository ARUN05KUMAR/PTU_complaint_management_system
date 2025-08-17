const {DataTypes, Sequelize}=require('sequelize');
const sequelize=require('../config/db.config');

const PublicComplaints = sequelize.define('publicComplaints',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    category:{
        type:DataTypes.ENUM('Academic','Infrastructure','Hostel','Administration','Security','Extracurricular'),
        allowNull: false
    },
    complaintDate:{
        type:DataTypes.DATEONLY,
        defaultValue:Sequelize.literal('CURRENT_DATE')
    },
    issuedBy:{
        type: DataTypes.ENUM('student','professor','supportingStaff'),
        allowNull: false
    },
    issuerId:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    expose:{
        type:DataTypes.ENUM('yes','no'),
        defaultValue:'no'
    },
    status:{
        type:DataTypes.ENUM('pending','inProgress','solved','rejected'),
        defaultValue:'pending'
    },
    solution:{
        type:DataTypes.STRING,
        defaultValue:'not solved'
    },
    likes:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    dislikes:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }
});

module.exports=PublicComplaints;