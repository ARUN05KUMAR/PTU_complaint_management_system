const express = require("express");
const router = express.Router();
const professorsService = require("../services/professors.service");

router.get("/",async(req,res)=>{
    const Professors = await professorsService.getAllProfessors();
    res.json(Professors);
});

router.get("/:id",async(req,res)=>{
    const Professor = await professorsService.getProfessorsById(req.params.id);
    res.json(Professor);
});

router.get("/email/:email",async(req,res)=>{
    const Professor = await professorsService.getProfessorByEmail(req.params.email);
    res.json(Professor);
});

router.post("/",async(req,res)=>{
    const Professor = await professorsService.addNewProfessor(req.body);
    res.json(Professor);
});

router.put("/:id",async(req,res)=>{
    const updatedProfessor = await professorsService.updateProfessor(req.params.id,req.body);
    res.json(updatedProfessor);
});

router.delete("/:id",async(req,res)=>{
    await professorsService.deleteProfessor(req.params.id);
    res.json({message:"Professor details deleted"});
});

module.exports=router;
