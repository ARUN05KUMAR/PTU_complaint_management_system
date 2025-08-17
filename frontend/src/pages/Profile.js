import React,{useState,useEffect} from 'react'
import studentService from '../services/studentService';
import professorService from '../services/professorServices';
import supportingStaffService from '../services/supportingStaffService';
import '../css/Profile.css'
const Profile = () => {

  const userType = sessionStorage.getItem("loggedInUserType");
  const userId = JSON.parse(sessionStorage.getItem("loggedInUserId"));

  const [user, setUsers] = useState('');

  useEffect(() => {
        const fetchdetails = async () => {
          let data;
          try {
            if (userType === 'student') 
            {
              data = await studentService.getStudentById(userId);
            }
            else if (userType === 'professor') 
            {
              data = await professorService.getProffesorById(userId);
            }
            else 
            {
              data = await supportingStaffService.getSupportingStaffById(userId);
            }
            setUsers(data);
          } catch (error) {
            console.error("Error fetching user details:", error);
          }
        };
        fetchdetails();
      }, [userType, userId]);

  return (
    <main>
      <div className="profile">
        <h1 style={{color:'#004aad'}}>My Profile</h1>
      {userType==='student'&&
          <>
          <label>Register Number: </label>
          <p>{user.registerNumber}</p>
          <label>Name: </label>
          <p>{user.name}</p>
          <label>Gender: </label>
          <p>{user.gender}</p>
          <label>Email: </label>
          <p>{user.email}</p>
          <label>Degree: </label>
          <p>{user.degree}</p>
          <label>Department: </label>
          <p>{user.department}</p>
          <label>Batch: </label>
          <p>{user.batch}</p>
          </>
      }
      {userType==='professor'&&
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
      }
      {userType==='supportingStaff'&&
          <>
          <label>Name: </label>
          <p>{user.name}</p>
          <label>Gender: </label>
          <p>{user.gender}</p>
          <label>Email: </label>
          <p>{user.email}</p>
          <label>Supporting Staff Type: </label>
          <p>{user.type}</p>
          <label>Employment Type: </label>
          <p>{user.employmentType}</p>
          <label>Department: </label>
          <p>{user.department}</p>
          </>
      }
      </div>
    </main>
  )
}

export default Profile