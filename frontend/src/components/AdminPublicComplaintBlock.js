import React, { useEffect, useState } from 'react';
import studentService from '../services/studentService';
import professorService from '../services/professorServices';
import supportingStaffService from '../services/supportingStaffService';
import publicComplaintService from '../services/publicComplaintService';
import '../css/ComplaintBlock.css'

const AdminPublicComplaintBlock = ({ Complaint }) => {
  const [issuer, setIssuer] = useState(null);
  const [status,setStatus]=useState(Complaint.status);
  const [solution,setSolution]=useState("");
  const [complaint,setComplaint]=useState("");


  useEffect(() => {
    const fetchIssuer = async () => {
      const { issuedBy, issuerId } = Complaint;
      let data = null;

      if (issuedBy === 'student') {
        data = await studentService.getStudentById(issuerId);
      } else if (issuedBy === 'professor') {
        data = await professorService.getProffesorById(issuerId);
      } else {
        data = await supportingStaffService.getSupportingStaffById(issuerId);
      }

      setIssuer(data);
    };

    fetchIssuer();
  }, [Complaint]);

  const handleChange=async()=>{
    if(solution!=="")
    {
      setComplaint({
      status:status,
      solution:solution
      });
    }
    else
    {
       setComplaint({
        status:status
        })
    }
    await publicComplaintService.updatePublicComplaint(Complaint.id,complaint);
    console.log(complaint);
  }

  if (!issuer) return <p>Loading...</p>;

  return (
    <div className="complaint-block">
      <p>Category: <strong>{Complaint.category}</strong></p>
      <p>Date: {Complaint.complaintDate}</p>
      <p>Issued By: {Complaint.issuedBy}</p>
      <p>Name: {issuer.name}</p>
      <p>Email: {issuer.email}</p>

      {Complaint.issuedBy === 'student' ? (
        <>
          <p>Register No: {issuer.registerNumber}</p>
          <p>Department: {issuer.department}</p>
          <p>Degree: {issuer.degree}</p>
          <p>Batch: {issuer.batch}</p>
        </>
      ) : Complaint.issuedBy === 'professor' ? (
        <>
          <p>Type: {issuer.type}</p>
          <p>Employment Type: {issuer.employmentType}</p>
          <p>Department: {issuer.department}</p>
        </>
      ) : (
        <>
          <p>Type: {issuer.type}</p>
          <p>Employment Type: {issuer.employmentType}</p>
        </>
      )}

      <p>Description: {Complaint.description}</p>
      <label>Status:</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">pending</option>
            <option value="inProgress">In Progress</option>
            <option value="solved">Solved</option>
            <option value="rejected">Rejected</option>
      </select>
      <p><strong>Solution:</strong> {Complaint.solution}</p>
      <label>Solution:</label>
      <input placeholder="Give Solution" value={solution} onChange={(e)=>setSolution(e.target.value)}></input>
      <p>👍 Likes: {Complaint.likes} </p> 
      <p>👎 Dislikes: {Complaint.dislikes}</p>
      <button onClick={handleChange}>Apply Changes</button>
    </div>
  );
};

export default AdminPublicComplaintBlock;
