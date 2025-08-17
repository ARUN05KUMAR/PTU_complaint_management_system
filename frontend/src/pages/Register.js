import {useEffect,useState } from 'react';
import StudentRegister from '../components/StudentRegister';
import ProfessorRegister from '../components/ProfessorRegister';
import SupportingStaffRegister from '../components/SupportingStaffRegister';
import AdminRegister from '../components/AdminRegister';
import '../css/RegisterPage.css'

const Register = () => {
  const [role, setRole] = useState('');
  const [userType, setUserType] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (role !== 'user') {
      setUserType('');
    }
  }, [role]);

  return (
    <div class="register-page">
      <h2>Register Page</h2>

      <label>Role:</label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      >
        <option value="">Select Role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      {role === 'user' && (
        <>
          <label>User Type:</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="">--Select One--</option>
            <option value="student">Student</option>
            <option value="professor">Professor</option>
            <option value="supportingStaff">Supporting Staff</option>
          </select>
        </>
      )}

      {role === 'admin' && <AdminRegister setError={setError} />}

      {role === 'user' && (
        <>
          {userType === 'student' && <StudentRegister setError={setError} />}
          {userType === 'professor' && <ProfessorRegister setError={setError} />}
          {userType === 'supportingStaff' && <SupportingStaffRegister setError={setError} />}
        </>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Register;
