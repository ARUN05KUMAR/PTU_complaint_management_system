import React, { useEffect, useState } from 'react';
import privateComplaintService from '../services/privateComplaintService';
import '../css/ComplaintBlock.css'

const AdminPrivateComplaintBlock = ({ Complaint }) => {
    const [like, setLike]=useState(Complaint.likes);
    const [dislike,setDislike]=useState(Complaint.dislikes);
    const [status,setStatus]=useState(Complaint.status);
    const [solution,setSolution]=useState("");
    

  const handleLike=async()=>{
    await privateComplaintService.likePrivateComplaint(Complaint.id);
    setLike(like+1);
  }

  const handledisLike=async()=>{
    await privateComplaintService.dislikePrivateComplaint(Complaint.id);
    setDislike(dislike+1);
  }

  const handleChange=async()=>{
    await privateComplaintService.updatePrivateComplaintStatus(Complaint.id,{status:status});
    if(solution!=="")
    {
    await privateComplaintService.updatePrivateComplaintSolution(Complaint.id,{solution:solution});
    }
    setSolution("");
  }


  return (
    <div className="complaint-block">
      <p>Category: {Complaint.category}</p>
      <p>Date: {Complaint.complaintDate}</p>
      <p>Description: {Complaint.description}</p>
      <label>Status:</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">pending</option>
            <option value="inProgress">In Progress</option>
            <option value="solved">Solved</option>
            <option value="rejected">Rejected</option>
      </select>
      <p><strong>Solution: </strong>{Complaint.solution}</p>
      <label>Solution:</label>
      <input placeholder="Give Solution" value={solution} onChange={(e)=>setSolution(e.target.value)}></input>
      <p className="like" onClick={handleLike}>👍Likes: {like} </p> 
      <p className="dislike" onClick={handledisLike}>👎Dislikes: {dislike}</p>
      <button onClick={handleChange}>Apply Changes</button>
    </div>
  );
};

export default AdminPrivateComplaintBlock;
