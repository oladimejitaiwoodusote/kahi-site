import '../styles/Contact.css';
import Contact_1 from '../assets/Contact Us.jpg';



function Contact() {
  return (
    <div className='Contact'>
        <div className='Contact_Image'>
            <img src={Contact_1} alt="Contact_1"/>
            <h1>Contact Us</h1>
        </div>
        <div className='Contact_Blurb'>
            <h2>Client Consultation Form</h2>
            <p>Thank you for choosing The Kahi Company! Please fill out this form so we
            can understand your vision and create a memorable event tailored just for you.
            </p>
        </div>
        <div className='Contact_Form'>
            
        </div>
    </div>
  )
}

export default Contact