import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import studentService from '../services/studentService';
import '../css/Register.css'

const StudentRegister = ({setError}) => {
      const [registerNumber,setRegisterNumber]=useState('');
      const [degree,setDegree]=useState('');
      const [batch,setBatch]=useState('');
      const [name,setName]=useState('');
      const [gender,setGender]=useState('');
      const [email,setEmail]=useState('');
      const [department,setDepartment]=useState('');
      const [password,setPassword]=useState(''); 

      const navigate = useNavigate();

      const handleRegister = async () => {
            try 
            {
                    const newStudent = {
                        registerNumber:registerNumber,
                        name:name,
                        gender:gender,
                        email:email,
                        degree:degree,
                        department:department,
                        batch:batch,
                        password:password
                        }
                        console.log(newStudent);
                        const student = await studentService.addStudent(newStudent);
                        if(student!==null)
                            {
                                navigate("/login");
                            }          
            } 
            catch (err) {
          setError("Something went wrong during login");
        }
      };
  return (
            <div class="register-form">
                    <label>Register Numbeer :</label>
                    <input type="number" placeholder='Register Number' 
                    value={registerNumber} onChange={(e)=>setRegisterNumber(e.target.value)} 
                    required></input>

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

                    <label>Degree :</label>
                    <select value={degree} onChange={(e) => setDegree(e.target.value)} required>
                        <option value="">--Select One--</option>
                        <option value="Btech">Btech</option>
                        <option value="Mtech">Mtech</option>
                        <option value="Phd">Phd</option>
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
                    </select>

                    <label>Batch :</label>
                    <input type="text" placeholder='Batch (Ex: 20AA-20BB)' 
                    value={batch} onChange={(e)=>setBatch(e.target.value)} 
                    required></input>

                    <label>Password :</label>
                    <input type="password" placeholder='Password' 
                    value={password} onChange={(e)=>setPassword(e.target.value)} 
                    required></input>

                    <button onClick={handleRegister}>Register</button>
            </div>
  )
}

export default StudentRegister