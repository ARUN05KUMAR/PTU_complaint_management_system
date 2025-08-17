const express = require("express");
const router = express.Router();
const publicComplaintsCommentsService = require("../services/publicComplaintsComments.service");

//.................................get all comments of a complaint....................................

router.get("/all/:id",async(req,res)=>{
    const Complaints = await publicComplaintsCommentsService.getAllCommentsOfComplaint(req.params.id);
    res.json(Complaints);
});

//...........................................get by ID.................................................

router.get("/:id",async(req,res)=>{
    const Complaint = await publicComplaintsCommentsService.getCommentById(req.params.id);
    res.json(Complaint);
});

//..........................................like & dislike.................................................

router.put("/like/:id",async(req,res)=>{
    const Complaint= await publicComplaintsCommentsService.like(req.params.id);
    res.json(Complaint);
});

router.put("/dislike/:id",async(req,res)=>{
    const Complaint= await publicComplaintsCommentsService.dislike(req.params.id);
    res.json(Complaint);
});


//..............................................manipulation...........................................


router.post("/",async(req,res)=>{
    const Complaint = await publicComplaintsCommentsService.addNewComment(req.body);
    res.json(Complaint);
});

router.put("/:id",async(req,res)=>{
    const Complaint = await publicComplaintsCommentsService.updateComment(req.params.id,req.body);
    res.json(Complaint);
});

router.delete("/:id",async(req,res)=>{
    await publicComplaintsCommentsService.deleteComment(req.params.id);
    res.json({message:"Comment deleted"});
});

module.exports=router;
