import React, { useState } from 'react';
import '../styles/Contact.css';
import Contact_1 from '../assets/Contact Us.jpg';
import useParallaxHeader from '../hooks/useParralaxHeader';
import emailjs from "@emailjs/browser"

function Contact() {
    useParallaxHeader({
        heroSelector: ".Contact_Image"
    })

    const [formData, setFormData] = useState({
        fullname: "",
        business: "",
        email: "",
        phone: "",
        contactMethod: [] as string[],
        eventtype: [] as string[],
        eventdate: "",
        eventlocation: "",
        guests: "",
        description: "",
        goals: ["", "", ""],
        mood: "",
        services: [] as string[],
        special: "",
        gift : [] as string[],
        consent: [] as string[],
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value, type } = e.target;
      
        if (type === "checkbox") {
          const input = e.target as HTMLInputElement; // 👈 type narrowing
          const checked = input.checked;
      
          setFormData(prev => {
            const current = prev[name as keyof typeof prev] as string[];
            const updated = checked
              ? [...current, value]
              : current.filter(v => v !== value);
      
            return { ...prev, [name]: updated };
          });
        } else {
          setFormData(prev => ({ ...prev, [name]: value }));
        }
      };
      

    const handleGoalChange = (index: number, value: string) => {
        setFormData(prev => {
            const newGoals = [...prev.goals];
            newGoals[index] = value;
            return { ...prev, goals: newGoals };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Prepare templateParams for EmailJS
        const templateParams = {
            ...formData,
            goals: formData.goals.join(", "),
            contactmethod: formData.contactMethod.join(", "),
            eventtype: formData.eventtype.join(", "),
            services: formData.services.join(", "),
        };

        emailjs.send('service_x1d3asd', 'template_c6k2r3v', templateParams, '0452pkp-cvB9_0Waa')
            .then((res) => {
                console.log("Email sent successfully!", res.status, res.text);
                alert("Form submitted! Thank you.");
            })
            .catch((err) => {
                console.error("Error sending email:", err);
                alert("Oops, something went wrong.");
            });
    };

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
                <form className='ContactForm' onSubmit={handleSubmit}>
                    {/* Client Information */}
                    <div className='ContactForm_Section'>
                        <h3>Client Information</h3>
                        <label>Fullname (required)</label>
                        <input type='text' name='fullname' value={formData.fullname} onChange={handleChange}/>

                        <label>Business/Organization (if applicable)</label>
                        <input type='text' name='business' value={formData.business} onChange={handleChange}/>

                        <label>Email Address (required)</label>
                        <input type='email' name='email' value={formData.email} onChange={handleChange}/>

                        <label>Phone Number (required)</label>
                        <input type='tel' name='phone' value={formData.phone} onChange={handleChange}/>

                        <p>Preferred method of contact</p>
                        <div className='ContactForm_Checkboxes'>
                            {["email", "phone", "whatsapp"].map(method => (
                                <label key={method}>
                                    <input type='checkbox' name='contactMethod' value={method} onChange={handleChange}/> {method.charAt(0).toUpperCase() + method.slice(1)}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Event Overview */}
                    <div className='ContactForm_Section'>
                        <h3>Event Overview</h3>
                        <p>Type of Event</p>
                        <div className='ContactForm_Checkboxes'>
                            {["wedding","birthday","anniversary","babyshower","cooperate","product","other"].map(type => (
                                <label key={type}>
                                    <input type='checkbox' name='eventtype' value={type} onChange={handleChange}/> {type.charAt(0).toUpperCase() + type.slice(1)}
                                </label>
                            ))}
                        </div>
                        <label>Event Date (required)</label>
                        <input type='text' name='eventdate' value={formData.eventdate} onChange={handleChange}/>
                        <label>Event Location (required)</label>
                        <input type='text' name='eventlocation' value={formData.eventlocation} onChange={handleChange}/>
                        <label>Number of Guests (approx.)</label>
                        <input type='text' name='guests' value={formData.guests} onChange={handleChange}/>
                    </div>

                    {/* Event Goals & Vision */}
                    <div className='ContactForm_Section'>
                        <h3>Event Goals & Vision</h3>
                        <label>Briefly describe purpose or theme of your event:</label>
                        <input type='text' name='description' value={formData.description} onChange={handleChange}/>

                        <label>Top 3 goals for this event:</label>
                        {formData.goals.map((goal, idx) => (
                            <input key={idx} type='text' value={goal} onChange={e => handleGoalChange(idx, e.target.value)}/>
                        ))}

                        <label>Describe the mood, vibe or style you want</label>
                        <input type='text' name='mood' value={formData.mood} onChange={handleChange}/>
                    </div>

                    {/* Services Needed */}
                    <div className='ContactForm_Section'>
                        <h3>Services Needed</h3>
                        <div className='ContactForm_Checkboxes'>
                            {["fullservice","partial","onsite"].map(service => (
                                <label key={service}>
                                    <input type='checkbox' name='services' value={service} onChange={handleChange}/> {service.replace(/([a-z])([A-Z])/g, '$1 $2')}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Guest & Experience */}
                    <div className='ContactForm_Section'>
                        <h3>Guest & Experience Details</h3>
                        <label>Special requests</label>
                        <input type='text' name='special' value={formData.special} onChange={handleChange}/>

                        <p>Do you require gift curation or favor arrangements?</p>
                        <div className='ContactForm_Checkboxes'>
                            {["yes","no"].map(opt => (
                                <label key={opt}>
                                    <input type='checkbox' name='gift' value={opt} onChange={handleChange}/> {opt.charAt(0).toUpperCase() + opt.slice(1)}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Consent */}
                    <div className='ContactForm_Section'>
                        <h3>Consent</h3>
                        <p>I consent to the Kahi Company using this information to plan, coordinate, and design my event</p>
                        <div className='ContactForm_Checkboxes'>
                            {["yes","no"].map(opt => (
                                <label key={opt}>
                                    <input type='checkbox' name='consent' value={opt} onChange={handleChange}/> {opt.charAt(0).toUpperCase() + opt.slice(1)}
                                </label>
                            ))}
                        </div>
                    </div>

                    <button type='submit' className='ContactForm_Submit'>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;