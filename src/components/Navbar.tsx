import '../styles/Navbar.css';
import logo from '../assets/Logo.jpg';
import { FaInstagram, FaLinkedinIn, FaFacebook } from 'react-icons/fa';


function Navbar() {
  return (
    <header className='Navbar'>
        <div className='Navbar_logo'>
          <img src={logo} alt="The Kahi Company Logo"/>
        </div>

        <nav className='Navbar_middle'>
          <a href="/">HOME</a>
          <a href="/about">ABOUT US</a>
          <a href="/services">SERVICES</a>
          <a href="/contact">CONTACT US</a>
        </nav>

        <div className='Navbar_right'>
          <a
            href="https://www.instagram.com/thekahicompany/"
            target='_blank'
            rel="noopener noreferrer"
            aria-label='Instagram'
          >
            <FaInstagram/>
          </a>
          <a
            href="https://www.facebook.com/Thekahicompany/"
            target='_blank'
            rel="noopener noreferrer"
            aria-label='Facebook'
          >
            <FaFacebook/>
          </a>
          <a
            href="https://www.linkedin.com/in/the-kahi-company-687303112/"
            target='_blank'
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn/>
          </a>
        </div>
    </header>
  )
}

export default Navbar