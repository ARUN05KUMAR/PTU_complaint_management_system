import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/FlashPage.css'; // Import the CSS file

const FlashPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flash-container">
      <h2 className="flash-heading">
        Welcome to PTU Complaint Management System! <br />
        Login with your existing account or create a new one to continue.
      </h2>
      <div className="flash-buttons">
        <button onClick={() => navigate('/login')} className="flash-btn">
          Login
        </button>
        <button onClick={() => navigate('/register')} className="flash-btn">
          Register
        </button>
      </div>
    </div>
  );
};

export default FlashPage;
