import '../styles/Footer.css'
import { FaInstagram, FaFacebook, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='Footer'>
        <div className='Footer_Top'>
        <a href="/contact" className="Footer_Contact">
            CONTACT US
        </a>
        </div>
        <div className='Footer_Middle'>
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
        <div className='Footer_Bottom'>
            <p>© 2019-2026 The Kahi Company<sup>TM</sup> LLC, All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer