import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import adminService from '../services/adminService';
import studentService from '../services/studentService';
import professorService from '../services/professorServices';
import supportingStaffService from '../services/supportingStaffService';
import '../css/Login.css'

const Login = () => {
  const [role, setRole] = useState('');
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      localStorage.setItem('role', role);
      sessionStorage.setItem("loggedInRole",role);
      if (role === 'user') 
        {
        if (userType === 'student') 
        {
          const student = await studentService.getStudentByEmail(email);
          if (student && student.password === password) 
          {
            localStorage.setItem('user', JSON.stringify(student));
            
            sessionStorage.setItem("loggedInUserType", userType);
            sessionStorage.setItem("loggedInUserId", JSON.stringify(student.id));
            navigate('/user');
          } 
          else 
          {
            setError("Invalid student credentials");
          }
        } 
        else if (userType === 'professor') 
        {
          const professor = await professorService.getProffesorByEmail(email);
          if (professor && professor.password === password) 
           {
            localStorage.setItem('user', JSON.stringify(professor));
            sessionStorage.setItem("loggedInUserType", userType);
            sessionStorage.setItem("loggedInUserId", JSON.stringify(professor.id));
            navigate('/user');
           } 
          else 
          {
            setError("Invalid professor credentials");
          }
        } 
        else 
        {
          const staff = await supportingStaffService.getSupportingStaffByEmail(email);
          if (staff && staff.password === password) 
          {
            localStorage.setItem('user', JSON.stringify(staff));
            sessionStorage.setItem("loggedInUserType", userType);
            sessionStorage.setItem("loggedInUserId", JSON.stringify(staff.id));
            navigate('/user');
          } 
          else 
          {
            setError("Invalid staff credentials");
          }
        }
      } 
      else 
      {
        const admin = await adminService.getAdminByEmail(email);
        if (admin && admin.password === password) 
        {
          localStorage.setItem('user', JSON.stringify(admin));
          sessionStorage.setItem("loggedInAdminId", JSON.stringify(admin.id));
          navigate('/admin');
        } 
        else 
        {
          setError("Invalid admin credentials");
        }
      }
    } 
    catch (err) 
    {
      setError("Something went wrong during login");
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <label>Role:</label>
      <select 
        value={role} 
        onChange={(e) => (setRole(e.target.value))}
        required
      >
        <option value="">Select Role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
  
      {role === 'user' && (
        <>
          <label>User Type:</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
            <option value="">--select one--</option>
            <option value="student">Student</option>
            <option value="professor">Professor</option>
            <option value="supportingStaff">Supporting Staff</option>
          </select>
        </>
      )}
  
      {(role === 'admin' || (role === 'user' && userType !== '')) && (
        <>
          <input 
            type="email" 
            placeholder='Registered Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
  
      {error && <p>{error}</p>}
    </div>
  );  
};

export default Login;
