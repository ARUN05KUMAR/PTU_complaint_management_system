import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PublicComplaintService from '../services/publicComplaintService';
import '../css/YourComplaint.css'

const YourComplaints = () => {
  const userType = sessionStorage.getItem("loggedInUserType");
  const userId = JSON.parse(sessionStorage.getItem("loggedInUserId"));

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      let data = [];
      try {
        if (userType === 'student') {
          data = await PublicComplaintService.getAllPublicComplaintOfIndividualStudent(userId);
        } else if (userType === 'professor') {
          data = await PublicComplaintService.getAllPublicComplaintOfIndividualProfessor(userId);
        } else {
          data = await PublicComplaintService.getAllPublicComplaintOfIndividualSupportingStaff(userId);
        }
        setComplaints(data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    fetchComplaints();
  }, [userType, userId]);

  return (
    <main>
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint.id} className='complaint_short'>
            <Link to={`/user/complaint/public/${complaint.id}`}>
              <>
                <p>{complaint.category}</p>
                <p>{complaint.complaintDate}</p>
                <p>{complaint.description.slice(0, 15)}...</p>
                <p><strong>Status: </strong>{complaint.status}</p>
                <div className='likes_dislikes'>
                  <span>👍 {complaint.likes}</span>
                  <span>👎 {complaint.dislikes}</span>
                </div>
              </>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default YourComplaints;
