const express = require("express");
const router = express.Router();
const studentsService = require("../services/students.service");

router.get("/",async(req,res)=>{
    const Students = await studentsService.getAllStudents();
    res.json(Students);
});

router.get("/:id",async(req,res)=>{
    const Student = await studentsService.getStudentsById(req.params.id);
    res.json(Student);
});

router.get("/registerNumber/:id",async(req,res)=>{
    const Student = await studentsService.getStudentByReg(req.params.id);
    res.json(Student);
});

router.get("/email/:email",async(req,res)=>{
    const Student = await studentsService.getStudentByEmail(req.params.email);
    res.json(Student);
});

router.post("/",async(req,res)=>{
    const Student = await studentsService.addNewStudent(req.body);
    res.json(Student);
});

router.put("/:id",async(req,res)=>{
    const updatedStudent = await studentsService.updateStudent(req.params.id,req.body);
    res.json(updatedStudent);
});

router.delete("/:id",async(req,res)=>{
    await studentsService.deleteStudent(req.params.id);
    res.json({message:"Student details deleted"});
});

module.exports=router;
