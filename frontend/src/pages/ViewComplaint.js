import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PublicComplaintBlock from '../components/PublicComplaintBlock';
import PrivateComplaintBlock from '../components/PrivateComplaintBlock';
import PublicComplaintService from '../services/publicComplaintService';
import PrivateComplaintService from '../services/privateComplaintService';
import '../css/ViewComplaint.css'
import AdminPublicComplaintBlock from '../components/AdminPublicComplaintBlock';
import AdminPrivateComplaintBlock from '../components/AdminPrivateComplaintBlock';

const ViewComplaint = ({ type }) => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);
  
  const role = sessionStorage.getItem("loggedInRole");

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        if (type === 'public') {
          const res = await PublicComplaintService.getPublicComplaintById(id);
          setComplaint(res);
        } else {
          const res = await PrivateComplaintService.getPrivateComplaintById(id);
          setComplaint(res);
        }
      } catch (err) {
        console.error('Error fetching complaint:', err);
      }
    };

    fetchComplaint();
  }, [id, type]);

  return (
    <>
      {role==='user'&&
        <main className='viewcomplaint'>
          {type === 'public' && complaint && <PublicComplaintBlock Complaint={complaint} />}
          {type === 'private' && complaint && <PrivateComplaintBlock Complaint={complaint} />}
        </main>
      }
        
      {role==='admin'&&
        <main className='viewcomplaint'>
          {type === 'public' && complaint && <AdminPublicComplaintBlock Complaint={complaint} />}
          {type === 'private' && complaint && <AdminPrivateComplaintBlock Complaint={complaint} />}
        </main>
      }
    </>
  );
};

export default ViewComplaint;
