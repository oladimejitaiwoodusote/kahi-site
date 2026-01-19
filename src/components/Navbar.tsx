import '../styles/Navbar.css';
import logo from '../assets/Logo.jpg';
import { FaInstagram, FaLinkedinIn, FaFacebook, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='Navbar'>
      <div className='Navbar_logo'>
        <Link to="/">
          <img src={logo} alt="The Kahi Company Logo" />
        </Link>
      </div>

      {/* Desktop nav */}
      <nav className={`Navbar_middle ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link>

        {/* Socials inside mobile menu */}
        <div className="Navbar_mobile_socials">
          <a href="https://www.instagram.com/thekahicompany/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/Thekahicompany/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/the-kahi-company-687303112/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
      </nav>

      {/* Desktop socials */}
      <div className='Navbar_right'>
        <a href="https://www.instagram.com/thekahicompany/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.facebook.com/Thekahicompany/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.linkedin.com/in/the-kahi-company-687303112/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>

      {/* Hamburger */}
      <button className="Navbar_toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;
