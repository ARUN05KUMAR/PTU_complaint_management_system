const express = require("express");
const router = express.Router();
const supportingStaffsService = require("../services/supportingStaffs.service");

router.get("/",async(req,res)=>{
    const SupportingStaffs = await supportingStaffsService.getAllsupportingStaffs();
    res.json(SupportingStaffs);
});

router.get("/:id",async(req,res)=>{
    const SupportingStaff = await supportingStaffsService.getsupportingStaffsById(req.params.id);
    res.json(SupportingStaff);
});

router.get("/email/:email",async(req,res)=>{
    const SupportingStaff = await supportingStaffsService.getsupportingStaffsByEmail(req.params.email);
    res.json(SupportingStaff);
});

router.post("/",async(req,res)=>{
    const SupportingStaff = await supportingStaffsService.addNewsupportingStaffs(req.body);
    res.json(SupportingStaff);
});

router.put("/:id",async(req,res)=>{
    const SupportingStaff = await supportingStaffsService.updatesupportingStaffs(req.params.id,req.body);
    res.json(SupportingStaff);
});

router.delete("/:id",async(req,res)=>{
    await supportingStaffsService.deletesupportingStaffs(req.params.id);
    res.json({message:"Supporting Staff details deleted"});
});

module.exports=router;
