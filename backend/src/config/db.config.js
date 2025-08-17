const Sequelize = require('sequelize');

const sequelize=new Sequelize('ptu_complaint_sys','root','',
    {
        host:'localhost',
        dialect:'mysql'
    });

module.exports=sequelize;