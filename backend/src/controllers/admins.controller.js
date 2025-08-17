const express = require("express");
const router = express.Router();
const adminsService = require("../services/admins.service");

router.get("/",async(req,res)=>{
    const Admins = await adminsService.getadmins();
    res.json(Admins);
});

router.get("/:id",async(req,res)=>{
    const Admin = await adminsService.getadminById(req.params.id);
    res.json(Admin);
});

router.get("/email/:email",async(req,res)=>{
    const Admin = await adminsService.getadminByEmail(req.params.email);
    res.json(Admin);
});

router.post("/",async(req,res)=>{
    const Admin = await adminsService.addNewadmin(req.body);
    res.json(Admin);
});

router.put("/:id",async(req,res)=>{
    const Admin = await adminsService.updateadmin(req.params.id,req.body);
    res.json(Admin);
});

router.delete("/:id",async(req,res)=>{
    await adminsService.deleteadmin(req.params.id);
    res.json({message:"Admin details deleted"});
});

module.exports=router;
