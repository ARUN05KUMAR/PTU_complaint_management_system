const express = require("express");
const router = express.Router();
const privateComplaintsService = require("../services/privateComplaints.service");

//.........................................get all...................................................

router.get("/",async(req,res)=>{
    const Complaints = await privateComplaintsService.getAllPrivateComplaints();
    res.json(Complaints);
});


router.get("/:id",async(req,res)=>{
    const Complaint = await privateComplaintsService.getPrivateComplaintById(req.params.id);
    res.json(Complaint);
});

//..........................................like & dislike.................................................

router.put("/like/:id",async(req,res)=>{
    const Complaint= await privateComplaintsService.like(req.params.id);
    res.json(Complaint);
});

router.put("/dislike/:id",async(req,res)=>{
    const Complaint= await privateComplaintsService.dislike(req.params.id);
    res.json(Complaint);
});
//..............................................manipulation..............................................

router.post("/",async(req,res)=>{
    const Complaint = await privateComplaintsService.addNewPrivateComplaint(req.body);
    res.json(Complaint);
});

router.put("/status/:id",async(req,res)=>{
    const complaint=await privateComplaintsService.updateStatus(req.params.id,req.body);
    res.json(complaint);
});

router.put("/solution/:id",async(req,res)=>{
    const complaint=await privateComplaintsService.updateStatus(req.params.id,req.body);
    res.json(complaint);
});

router.delete("/:id",async(req,res)=>{
    await privateComplaintsService.deletePrivateComplaint(req.params.id);
    res.json({message:"Private Complaint deleted"});
});

module.exports=router;
