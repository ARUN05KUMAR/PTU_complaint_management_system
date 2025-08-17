import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import professorService from '../services/professorServices';
import '../css/Register.css'
 
const ProfessorRegister = ({setError}) => {

    const [name,setName]=useState('');
    const [gender,setGender]=useState('');
    const [email,setEmail]=useState('');
    const [department,setDepartment]=useState('');
    const [password,setPassword]=useState(''); 
    const [professorType,setProfessorType]=useState('');
    const [employmentType,setEmploymentType]=useState('');

    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
                 const newProfessor = {
                    name:name,
                    gender:gender,
                    email:email,
                    type:professorType,
                    employmentType:employmentType,
                    department:department,
                    password:password
                    }
                   const professor = await professorService.addProfessor(newProfessor);
                   if(professor!==null)
                    {
                        navigate("/login");
                    }
                            
        } catch (err) {
          setError("Something went wrong during login");
        }
      };
    
  
  return (
    <div class="register-form">
                    <label>Name :</label>
                    <input type="text" placeholder='Name' 
                    value={name} onChange={(e)=>setName(e.target.value)} 
                    required></input>

                    <label>Gender :</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                        <option value="">--Select One--</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>

                    <label>Email :</label>
                    <input type="email" placeholder='Registered Email' 
                    value={email} onChange={(e)=>setEmail(e.target.value)} 
                    required></input>

                    <label>Type :</label>
                    <select value={professorType} onChange={(e) => setProfessorType(e.target.value)} required>
                        <option value="">--Select One--</option>
                        <option value="professor">professor</option>
                        <option value="associateProfessor">associateProfessor</option>
                        <option value="assistantProfessor">assistantProfessor</option>
                    </select>

                    <label>Employment Type :</label>
                    <select value={employmentType} onChange={(e) => setEmploymentType(e.target.value)} required>
                        <option value="">--Select One--</option>
                        <option value="permanent">permanent</option>
                        <option value="temproary">temproary</option>
                    </select>

                    <label>Department :</label>
                    <select value={department} onChange={(e) => setDepartment(e.target.value)} required>
                        <option value="">--Select One--</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="IT">IT</option>
                        <option value="EIE">EIE</option>
                        <option value="EEE">EEE</option>
                        <option value="CHE">CHE</option>
                        <option value="CE">CE</option>
                        <option value="ME">ME</option>
                        <option value="MT">MT</option>
                        <option value="HS">MT</option>
                    </select>

                    <label>Password :</label>
                    <input type="password" placeholder='Password' 
                    value={password} onChange={(e)=>setPassword(e.target.value)} 
                    required></input>

                    <button onClick={handleRegister}>Register</button>
                </div>
  )
}

export default ProfessorRegister