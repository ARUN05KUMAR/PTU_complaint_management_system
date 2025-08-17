const express = require("express");
const router = express.Router();
const publicComplaintsService = require("../services/publicComplaints.service");

//.........................................get all...................................................

router.get("/",async(req,res)=>{
    const Complaints = await publicComplaintsService.getAllComplaints();
    res.json(Complaints);
});

router.get("/exposeUnsolved",async(req,res)=>{
    const Complaints = await publicComplaintsService.getAllExposeNotSolvedComplaints();
    res.json(Complaints);
});

router.get("/exposeSolved",async(req,res)=>{
    const Complaints = await publicComplaintsService.getAllExposeSolvedComplaints();
    res.json(Complaints);
});


router.get("/students",async(req,res)=>{
    const Complaints = await publicComplaintsService.getAllComplaintsByStudents();
    res.json(Complaints);
});

router.get("/professors",async(req,res)=>{
    const Complaints = await publicComplaintsService.getAllComplaintsByProfessors();
    res.json(Complaints);
});

router.get("/supportingStaffs",async(req,res)=>{
    const Complaints = await publicComplaintsService.getAllComplaintsBySupportingStaffs();
    res.json(Complaints);
});

//...........................................get by ID.................................................

router.get("/:id",async(req,res)=>{
    const Complaint = await publicComplaintsService.getComplaintById(req.params.id);
    res.json(Complaint);
});

router.get("/students/:id",async(req,res)=>{
    const Complaints = await publicComplaintsService.getAllComplaintsByIndividualStudent(req.params.id);
    res.json(Complaints);
});

router.get("/professors/:id",async(req,res)=>{
    const Complaints = await publicComplaintsService.getAllComplaintsByIndividualProfessor(req.params.id);
    res.json(Complaints);
});

router.get("/supportingStaffs/:id",async(req,res)=>{
    const Complaints = await publicComplaintsService.getAllComplaintsByIndividualSupportingStaff(req.params.id);
    res.json(Complaints);
});

//..........................................like & dislike.................................................

router.put("/like/:id",async(req,res)=>{
    const Complaint= await publicComplaintsService.like(req.params.id);
    res.json(Complaint);
});

router.put("/dislike/:id",async(req,res)=>{
    const Complaint= await publicComplaintsService.dislike(req.params.id);
    res.json(Complaint);
});

//..............................................manipulation..............................................


router.post("/",async(req,res)=>{
    const Complaint = await publicComplaintsService.addNewComplaint(req.body);
    res.json(Complaint);
});

router.put("/:id",async(req,res)=>{
    const Complaint = await publicComplaintsService.updateComplaint(req.params.id,req.body);
    res.json(Complaint);
});

router.delete("/:id",async(req,res)=>{
    await publicComplaintsService.deleteComplaint(req.params.id);
    res.json({message:"Complaint deleted"});
});

module.exports=router;
