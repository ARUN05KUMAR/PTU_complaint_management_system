const {DataTypes, Sequelize}=require('sequelize');
const sequelize=require('../config/db.config');

const PrivateComplaintsComments = sequelize.define('privateComplaintsComments',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    commentDate:{
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
    likes:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    dislikes:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }
});

module.exports=PrivateComplaintsComments;