import React,{useState,useEffect} from 'react'
import adminService from '../services/adminService';
import '../css/Profile.css'
const AdminProfile = () => {

  const adminId = JSON.parse(sessionStorage.getItem("loggedInAdminId"));

  const [user, setUsers] = useState('');

  useEffect(() => {
        const fetchdetails = async () => {
          let data;
          try {
           
              data = await adminService.getAdminById(adminId);
            setUsers(data);
          } catch (error) {
            console.error("Error fetching user details:", error);
          }
        };
        fetchdetails();
      }, [adminId]);

  return (
    <main>
      <div className="profile">
        <h1 style={{color:'#004aad'}}>My Profile</h1>
        <>
          <label>Name: </label>
          <p>{user.name}</p>
          <label>Gender:</label>
          <p>{user.gender}</p>
          <label>Email: </label>
          <p>{user.email}</p>
          <label>Professor Type: </label>
          <p>{user.type}</p>
          <label>Employment Type: </label>
          <p>{user.employmentType}</p>
          <label>Department: </label>
          <p>{user.department}</p>
        </>
      </div>
    </main>
  )
}

export default AdminProfile