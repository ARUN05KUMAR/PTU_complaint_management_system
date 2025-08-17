import React, { useEffect, useState } from 'react';
import studentService from '../services/studentService';
import professorService from '../services/professorServices';
import supportingStaffService from '../services/supportingStaffService';
import publicComplaintService from '../services/publicComplaintService';
import '../css/ComplaintBlock.css'

const PublicComplaintBlock = ({ Complaint }) => {
  const [issuer, setIssuer] = useState(null);
  const [like, setLike]=useState(Complaint.likes);
  const [dislike,setDislike]=useState(Complaint.dislikes);

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

  const handleLike=async()=>{
    await publicComplaintService.likePublicComplaint(Complaint.id);
    setLike(like+1);
  }

  const handledisLike=async()=>{
    await publicComplaintService.dislikePublicComplaint(Complaint.id);
    setDislike(dislike+1);
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
      <p>Status: {Complaint.status}</p>
      <p>Solution: {Complaint.solution}</p>
      <p className="like" onClick={handleLike}>👍 Likes: {like} </p> 
      <p className="dislike" onClick={handledisLike}>👎 Dislikes: {dislike}</p>
    </div>
  );
};

export default PublicComplaintBlock;
