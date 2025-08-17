import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PublicComplaintService from '../services/publicComplaintService';
import PrivateComplaintService from '../services/privateComplaintService';
import '../css/NewComplaint.css'

const NewComplaint = () => {
  const [complaintType,setCompalintType]=useState('');
  const [category,setCategory]=useState('');
  const [description,setDescription]=useState('');
  const [expose,setExpose]=useState('');
  const userType = sessionStorage.getItem("loggedInUserType");
  const userId= JSON.parse(sessionStorage.getItem("loggedInUserId"));
  const navigate =useNavigate();

  const handleSubmit = async (e) => 
    {
        e.preventDefault();     
        const complaint = 
        {
          category,
          description,
          expose,
        };
      
        try 
        {
          if (complaintType === 'public') 
          {
            complaint.issuedBy = userType;
            complaint.issuerId = userId;
            await PublicComplaintService.addPublicComplaint(complaint);
          }
          else 
          {
            await PrivateComplaintService.addPrivateComplaint(complaint);
          }
          setCategory("");
          setCompalintType("");
          setDescription("");
          setExpose("");
          navigate("/user");
        } 
        catch (error) 
        {
          console.error("Error submitting complaint:", error);
        }
    };
  
  return (
    <>
      <h1 className='newcomp'>New Complaint</h1>
      <select id="complaintType" value={complaintType} onChange={(e) => setCompalintType(e.target.value)} required>
          <option value="">--Select Complaint Type--</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
      </select>
        <form onSubmit={(e)=>handleSubmit(e)}>
          
          <label>Complaint Category :</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="">--Select One--</option>
              <option value="Academic">Academic</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Hostel">Hostel</option>
              <option value="Administration">Administration</option>
              <option value="Security">Security</option>
              <option value="Extracurricular">Extracurricular</option>
          </select>
          
          <label>Description :</label>
          <textarea id="description" type='text' placeholder='Explain your Complaint here...' required value={description}
            onChange={(e)=>setDescription(e.target.value)}
          ></textarea>
          
          <label>Expose the Complaint Publicly :</label>
          <select value={expose} onChange={(e) => setExpose(e.target.value)} required>
              <option value="">--Select One--</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
          </select>
          <button type="submit">Submit</button>
        </form>
          
    </>
  )
}

export default NewComplaint