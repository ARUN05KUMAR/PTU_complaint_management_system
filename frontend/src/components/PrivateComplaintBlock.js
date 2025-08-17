import React, { useEffect, useState } from 'react';
import privateComplaintService from '../services/privateComplaintService';
import '../css/ComplaintBlock.css'

const PrivateComplaintBlock = ({ Complaint }) => {
    const [like, setLike]=useState(Complaint.likes);
    const [dislike,setDislike]=useState(Complaint.dislikes);
  

  const handleLike=async()=>{
    await privateComplaintService.likePrivateComplaint(Complaint.id);
    setLike(like+1);
  }

  const handledisLike=async()=>{
    await privateComplaintService.dislikePrivateComplaint(Complaint.id);
    setDislike(dislike+1);
  }


  return (
    <div className="complaint-block">
      <p>Category: {Complaint.category}</p>
      <p>Date: {Complaint.complaintDate}</p>
      <p>Description: {Complaint.description}</p>
      <p>Status: {Complaint.status}</p>
      <p>Solution: {Complaint.solution}</p>
      <p className="like" onClick={handleLike}>👍Likes: {like} </p> 
      <p className="dislike" onClick={handledisLike}>👎Dislikes: {dislike}</p>
    </div>
  );
};

export default PrivateComplaintBlock;
