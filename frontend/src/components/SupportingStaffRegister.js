import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supportingStaffService from '../services/supportingStaffService';
import '../css/Register.css'

const SupportingStaffRegister = ({setError}) => {

      const [name,setName]=useState('');
      const [gender,setGender]=useState('');
      const [email,setEmail]=useState('');
      const [password,setPassword]=useState(''); 
      const [employmentType,setEmploymentType]=useState('');
      const [supportingStaffType,setSupportingStaffType]=useState('');

      const navigate = useNavigate();

      const handleRegister = async () => {
        try {
                    const newSupportingStaff = {
                        name:name,
                        gender:gender,
                        email:email,
                        type:supportingStaffType,
                        employmentType:employmentType,
                        password:password
                    }
                    const staff = await supportingStaffService.addSupportingStaff(newSupportingStaff);  
                    
                    if(staff!==null)
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
                    <select value={supportingStaffType} onChange={(e) => setSupportingStaffType(e.target.value)} required>
                        <option value="">--Select One--</option>
                        <option value="administrativeStaff">administrativeStaff</option>
                        <option value="technicalStaff">technicalStaff</option>
                        <option value="maintenanceStaff">maintenanceStaff</option>
                        <option value="hostelStaff">hostelStaff</option>
                    </select>

                    <label>Employment Type :</label>
                    <select value={employmentType} onChange={(e) => setEmploymentType(e.target.value)} required>
                        <option value="">--Select One--</option>
                        <option value="permanent">permanent</option>
                        <option value="temproary">temproary</option>
                    </select>

                    <label>Password :</label>
                    <input type="password" placeholder='Password' 
                    value={password} onChange={(e)=>setPassword(e.target.value)} 
                    required></input>

                    <button onClick={handleRegister}>Login</button>
            </div>
  )
}

export default SupportingStaffRegister