const express = require("express");
const router = express.Router();
const privateComplaintsCommentsService = require("../services/privateComplaintsComments.service");

//.................................get all comments of a complaint....................................

router.get("/all/:id",async(req,res)=>{
    const Complaints = await privateComplaintsCommentsService.getAllCommentsOfComplaint(req.params.id);
    res.json(Complaints);
});

//...........................................get by ID.................................................

router.get("/:id",async(req,res)=>{
    const Complaint = await privateComplaintsCommentsService.getCommentById(req.params.id);
    res.json(Complaint);
});

//..........................................like & dislike.................................................

router.put("/like/:id",async(req,res)=>{
    const Complaint= await privateComplaintsCommentsService.like(req.params.id);
    res.json(Complaint);
});

router.put("/dislike/:id",async(req,res)=>{
    const Complaint= await privateComplaintsCommentsService.dislike(req.params.id);
    res.json(Complaint);
});


//..............................................manipulation...........................................


router.post("/",async(req,res)=>{
    const Complaint = await privateComplaintsCommentsService.addNewComment(req.body);
    res.json(Complaint);
});

router.put("/:id",async(req,res)=>{
    const Complaint = await privateComplaintsCommentsService.updateComment(req.params.id,req.body);
    res.json(Complaint);
});

router.delete("/:id",async(req,res)=>{
    await privateComplaintsCommentsService.deleteComment(req.params.id);
    res.json({message:"Comment deleted"});
});

module.exports=router;
