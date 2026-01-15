import '../styles/Contact.css';
import Contact_1 from '../assets/Contact Us.jpg';
import useParallaxHeader from '../hooks/useParralaxHeader';

function Contact() {
    useParallaxHeader({
        heroSelector: ".Contact_Image"
    })
  return (
    <div className='Contact'>
        <div className='Contact_Image'>
            <img src={Contact_1} alt="Contact Us"/>
            <h1>Contact Us</h1>
        </div>
        <div className='Contact_Blurb'>
            <h2>Client Consultation Form</h2>
            <p>Thank you for choosing The Kahi Company! Please fill out this form so we
            can understand your vision and create a memorable event tailored just for you.
            </p>
        </div>


        <div className='Contact_Form_div'>
            <form className='ContactForm'>
                <div className='ContactForm_Section'>
                    <h3>Client Information</h3>

                    <label htmlFor='fullname'>Fullname (required)</label>
                    <input type='text' id="fullname" name='fullname'/>

                    <label htmlFor='business'>Business/Organization (if applicable)</label>
                    <input type='text' id="business" name='business'/>

                    <label htmlFor='email'>Email Address (required)</label>
                    <input type='email' id="email" name='email'/>

                    <label htmlFor='phone'>Phone Number (required)</label>
                    <input type='tel' id="phone" name='phone'/>

                    <p>Preferred method of contact</p>
                    <div className='ContactForm_Checkboxes'>
                        <label htmlFor='contactEmail'>
                            <input type='checkbox' id='contactEmail' name='contactMethod' value='email'/> Email
                        </label>
                        <label htmlFor='contactPhone'>
                            <input type='checkbox' id='contactPhone' name='contactMethod' value='phone'/> Phone
                        </label>
                        <label htmlFor='contactWhatsApp'>
                            <input type='checkbox' id='contactWhatsApp' name='contactMethod' value='whatsapp'/> WhatsApp
                        </label>
                    </div>
                </div>
                <div className='ContactForm_Section'>
                   <h3>Event Overview</h3>
                   <p>Type of Event</p>
                    <div className='ContactForm_Checkboxes'>
                        <label htmlFor='wedding'>
                            <input type='checkbox' id='wedding' name='contactMethod' value='wedding'/> Wedding
                        </label>
                        <label htmlFor='birthday'>
                            <input type='checkbox' id='birthday' name='contactMethod' value='birthday'/> Birthday
                        </label>
                        <label htmlFor='anniversary'>
                            <input type='checkbox' id='anniversary' name='contactMethod' value='anniversary'/> Anniversary
                        </label>
                        <label htmlFor='babyshower'>
                            <input type='checkbox' id='babyshower' name='contactMethod' value='babyshower'/> Babyshower
                        </label>
                        <label htmlFor='cooperate'>
                            <input type='checkbox' id='cooperate' name='contactMethod' value='cooperate'/> Coorperate Event
                        </label>
                        <label htmlFor='product'>
                            <input type='checkbox' id='product' name='contactMethod' value='product'/> Product Launch
                        </label>
                        <label htmlFor='other'>
                            <input type='checkbox' id='other' name='contactMethod' value='other'/> Other
                            <input type='text' id='other' name='contactMethod'/>
                        </label>
                    </div> 
                    <label htmlFor='eventdate'>Event Date (required)</label>
                    <input type='text' id="eventdate" name='eventdate'/>

                    <label htmlFor='eventlocation'>Event Location (required)</label>
                    <input type='text' id="eventlocation" name='eventlocation'/>

                    <label htmlFor='guests'>Number of Guests (approx.)(required)</label>
                    <input type='email' id="email" name='email'/>
                </div>
                <div className='ContactForm_Section'>
                    <h3>Event Goals & Vision:</h3>
                    <label htmlFor='description'>Briefly describe purpose or theme of your event: </label>
                    <input type='text' id="description" name='description'/>
                    <label htmlFor='goals'>Top 3 goals for this event: </label>
                    <input type='text' id="goals" name='goals'/>
                    <input type='text' id="goals" name='goals'/>
                    <input type='text' id="goals" name='goals'/>
                    <label htmlFor='mood'>Describe the mood, vibe or style you want (E.g elegant, fun & colorful, minimalist, luxurious, modern, romantic, etc.) </label>
                    <input type='text' id="mood" name='mood'/>
                </div>
                <div className='ContactForm_Section'>
                    <h3>Services Needed</h3>
                    <p>(Select all that apply)</p>
                    <div className='ContactForm_Checkboxes'>
                        <label htmlFor='fullservice'>
                            <input type='checkbox' id='fullservice' name='contactMethod' value='fullservice'/> Full-Service Event Planning & Coordination
                        </label>
                        <label htmlFor='partial'>
                            <input type='checkbox' id='partial' name='contactMethod' value='partial'/> Partial Service Planning & Coordination
                        </label>
                        <label htmlFor='onsite'>
                            <input type='checkbox' id='onsite' name='contactMethod' value='onsite'/> On-Site Event Coordination
                        </label>
                    </div>
                </div>
                <div className='ContactForm_Section'>
                    <h3>Guest & Experience Details</h3>
                    <label htmlFor='special'> Any special requests for guest experience (seating, VIPs, entertainment, food/drink customization)</label>
                    <input type='text' id="special" name='special'/>

                    <p>Do you require gift curation or favor arrangements</p>
                    <div className='ContactForm_Checkboxes'>
                        <label htmlFor='yes'>
                            <input type='checkbox' id='yes' name='contactMethod' value='yes'/> Yes
                        </label>
                        <label htmlFor='no'>
                            <input type='checkbox' id='no' name='contactMethod' value='no'/> No
                        </label>
                    </div>
                </div>
                <div className='ContactForm_Section'>
                    <h3>Consent</h3>
                    <p>I consent to the Kahi Company using this information to plan, coordinate, and design my event</p>
                    <div className='ContactForm_Checkboxes'>
                        <label htmlFor='yes'>
                            <input type='checkbox' id='yes' name='contactMethod' value='yes'/> Yes
                        </label>
                        <label htmlFor='no'>
                            <input type='checkbox' id='no' name='contactMethod' value='no'/> No
                        </label>
                    </div>
                </div>
                <button type='submit' className='ContactForm_Submit'>SUBMIT</button>
            </form>
        </div>
    </div>
  )
}

export default Contact