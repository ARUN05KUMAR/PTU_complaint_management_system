01) PTU Complaint Management System
      A MERN + MySQL based web application that streamlines the complaint submission and resolution process at Puducherry Technical University (PTU).
    It enables students, professors, and supporting staff to raise complaints (public or anonymous), support complaints via likes/dislikes, and track their statuses.
    Admins (authorized professors with passkeys) can monitor and resolve complaints efficiently through a secure dashboard.

02) Problem Statement
    The traditional PTU complaint submission system relies on manual emails and personal follow-ups, making it confusing and inefficient.
    This system solves the problem by offering a centralized, transparent, and user-friendly complaint platform.


03) Tech Stack
    Frontend: React.js + Redux
    Backend: Node.js + Express.js
    Database: MySQL (via Sequelize ORM)
    API: RESTful APIs

04) Key Features
   User Roles: Student, Professor, Supporting Staff, Admin
   Authentication: User/Admin registration & login
   Complaint Creation: Public (with details) or Private (anonymous)
   Complaint Viewing: All complaints with filters by user role/type
   Support System: Like/Dislike to show community support
   Complaint Tracking: Users can view and track their submitted complaints
   Admin Panel: Admins can view, update, and resolve all complaints
   Privacy Controls: Option to expose complaints publicly or keep them private
   Scalability (Planned): JWT Authentication, Notifications, Cloud deployment

05) Installation & Setup
  1️. Clone the Repository
       git clone https://github.com/ARUN05KUMAR/PTU_complaint_management_system.git
        
    2. Backend Setup
        cd backend
        npm install

    3. Configure MySQL connection in src/config/db.config.js

    Start backend:
    npm start

    4. Frontend Setup
        cd frontend
        npm install
        npm start

  React app runs at http://localhost:3000
  Backend API runs at http://localhost:5000

Contributors
    ArunKumar – Developer
