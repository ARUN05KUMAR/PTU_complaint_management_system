import '../css/ComplaintFeed.css'
import React from 'react';
import { Link } from 'react-router-dom';

const AdminComplaintFeed = ({ type, Complaints }) => {
  return (
    <div className='complaintFeed'>
      <ul>
        {type === 'Public'
          ? Complaints.map((Complaint) => (
              <li key={Complaint.id} className='complaint_short'>
                <Link to={`/admin/complaint/public/${Complaint.id}`}>
                  <>
                    <p>{Complaint.category}</p>
                    <p>{Complaint.issuedBy}</p>
                    <p>{Complaint.complaintDate}</p>
                    <p>{Complaint.description.slice(0, 15)}...</p>
                    <p><strong>Status: </strong>{Complaint.status}</p>
                    <div className='likes_dislikes'>
                      <span>👍 {Complaint.likes}</span>
                      <span>👎 {Complaint.dislikes}</span>
                    </div>
                  </>
                </Link>
              </li>
            ))
          : Complaints.map((Complaint) => (
              <li key={Complaint.id} className='complaint_short'>
                <Link to={`/admin/complaint/private/${Complaint.id}`}>
                  <>
                    <p>{Complaint.category}</p>
                    <p>{Complaint.complaintDate}</p>
                    <p>{Complaint.description.slice(0, 10)}...</p>
                    <p><strong>Status: </strong>{Complaint.status}</p>
                    <div className='likes_dislikes'>
                      <span>👍 {Complaint.likes}</span>
                      <span>👎 {Complaint.dislikes}</span>
                    </div>
                  </>
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default AdminComplaintFeed;
