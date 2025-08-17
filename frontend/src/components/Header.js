import logo from '../images/logo.webp';
import '../css/Header.css'
const Header = () => {
  return (
    <header className='header'>
      <img 
        src={logo}
        alt="Logo" 
        className="logo"
      />
      <h1>PTU Complaint Management System</h1>
    </header>
  );
};


export default Header