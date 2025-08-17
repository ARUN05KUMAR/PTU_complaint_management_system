import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  const role = sessionStorage.getItem("loggedInRole");
  return (
    <>
    {role==='user'&&
          <nav className='navbar'>
              <Link to="/user/"><p>Home</p></Link>
              <Link to="/user/newComplaint"><p>New Complaint</p></Link>
              <Link to="/user/yourComplaints"><p>My Complaints</p></Link>
              <Link to="/user/profile"><p>My Profile</p></Link>
              <Link to="/user/about"><p>About</p></Link>
          </nav>
    }

    {role==='admin'&&
          <nav className='navbar'>
              <Link to="/admin/"><p>Home</p></Link>
              <Link to="/admin/profile"><p>My Profile</p></Link>
              <Link to="/admin/about"><p>About</p></Link>
          </nav>
    }
    </>
  )
}

export default Navbar