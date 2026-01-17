import React, { useState } from 'react';
import '../styles/Contact.css';
import Contact_1 from '../assets/Contact Us.jpg';
import useParallaxHeader from '../hooks/useParralaxHeader';
import emailjs from "@emailjs/browser"

function Contact() {
    useParallaxHeader({
        heroSelector: ".Contact_Image"
    })
    
    const initialFormState = {
        fullname: "",
        business: "",
        email: "",
        phone: "",
        contactMethod: "",
        eventtype: "",
        eventdate: "",
        eventlocation: "",
        guests: "",
        description: "",
        goals: ["", "", ""],
        mood: "",
        services: "",
        special: "",
        gift: "",
        consent: "",
      };

    const [formData, setFormData] = useState(initialFormState)


    const [errors, setErrors] = useState<string[]>([])

    // const validateForm = () => {
    //     const newErrors: string[] = [];
      
    //     if (!formData.fullname.trim()) newErrors.push("Full name is required");
    //     if (!formData.email.trim()) newErrors.push("Email is required");
    //     if (!formData.phone.trim()) newErrors.push("Phone number is required");
      
    //     if (!formData.contactMethod) newErrors.push("Preferred contact method is required");
      
    //     if (!formData.eventtype) newErrors.push("Event type is required");
    //     if (!formData.eventdate.trim()) newErrors.push("Event date is required");
    //     if (!formData.eventlocation.trim()) newErrors.push("Event location is required");
    //     if (!formData.guests.trim()) newErrors.push("Number of guests is required");
      
    //     if (!formData.description.trim()) newErrors.push("Event description is required");
    //     if (!formData.mood.trim()) newErrors.push("Event mood is required");
      
    //     if (!formData.services) newErrors.push("Service selection is required");
    //     if (!formData.gift) newErrors.push("Gift arrangement selection is required");
    //     if (!formData.consent) newErrors.push("Consent is required");
      
    //     setErrors(newErrors);
    //     return newErrors.length === 0;
    //   };
      
    
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };            

    const handleGoalChange = (index: number, value: string) => {
        setFormData(prev => {
            const newGoals = [...prev.goals];
            newGoals[index] = value;
            return { ...prev, goals: newGoals };
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        const form = e.currentTarget;
        const formDataObj = new FormData(form);
      
        const payload = {
          fullname: formDataObj.get("fullname") as string,
          business: formDataObj.get("business") as string,
          email: formDataObj.get("email") as string,
          phone: formDataObj.get("phone") as string,
          contact_method: formDataObj.get("contactMethod") as string,
          eventtype: formDataObj.get("eventtype") as string,
          eventdate: formDataObj.get("eventdate") as string,
          eventlocation: formDataObj.get("eventlocation") as string,
          guests: formDataObj.get("guests") as string,
          description: formDataObj.get("description") as string,
          mood: formDataObj.get("mood") as string,
          services: formDataObj.get("services") as string,
          special: formDataObj.get("special") as string,
          gift: formDataObj.get("gift") as string,
          consent: formDataObj.get("consent") as string,
          goals: [
            formDataObj.get("goal0"),
            formDataObj.get("goal1"),
            formDataObj.get("goal2"),
          ]
            .filter(Boolean)
            .join(", "),
        };
      
        // Validate USING payload, not React state
        const newErrors: string[] = [];
        if (!payload.fullname) newErrors.push("Full name is required");
        if (!payload.email) newErrors.push("Email is required");
        if (!payload.contact_method) newErrors.push("Contact method is required");
        if (!payload.eventtype) newErrors.push("Event type is required");
        if (!payload.consent) newErrors.push("Consent is required");
      
        if (newErrors.length) {
          setErrors(newErrors);
          return;
        }
      
        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            payload,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
          .then(() => {
            alert("Form submitted! Thank you.");
            form.reset();              // 🔥 guaranteed reset
            setErrors([]);
            setFormData(initialFormState); // keep React in sync
          })
          .catch(() => alert("Oops, something went wrong."));
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

                        <p>Preferred method of contact (required)</p>
                        <div className='ContactForm_Checkboxes'>
                            {["email", "phone", "whatsapp"].map(method => (
                                <label key={method}>
                                    <input 
                                        type='radio' 
                                        name='contactMethod' 
                                        value={method} 
                                        onChange={handleChange}
                                        checked={formData.contactMethod === method}
                                        /> 
                                        {method.charAt(0).toUpperCase() + method.slice(1)}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Event Overview */}
                    <div className='ContactForm_Section'>
                        <h3>Event Overview</h3>
                        <p>Type of Event (required)</p>
                        <div className='ContactForm_Checkboxes'>
                            {["wedding","birthday","anniversary","babyshower","cooperate","product","other"].map(type => (
                                <label key={type}>
                                    <input 
                                        type='radio' 
                                        name='eventtype' 
                                        value={type} 
                                        onChange={handleChange}
                                        checked={formData.eventtype === type}
                                        /> 
                                        {type.charAt(0).toUpperCase() + type.slice(1)}
                                </label>
                            ))}
                        </div>
                        <label>Event Date (required)</label>
                        <input type='text' name='eventdate' value={formData.eventdate} onChange={handleChange}/>
                        <label>Event Location (required)</label>
                        <input type='text' name='eventlocation' value={formData.eventlocation} onChange={handleChange}/>
                        <label>Approximate Number of Guests (required)</label>
                        <input type='text' name='guests' value={formData.guests} onChange={handleChange}/>
                    </div>

                    {/* Event Goals & Vision */}
                    <div className='ContactForm_Section'>
                        <h3>Event Goals & Vision</h3>
                        <label>Briefly describe purpose or theme of your event (required)</label>
                        <input type='text' name='description' value={formData.description} onChange={handleChange}/>

                        <label>Top 3 goals for this event:</label>
                        {formData.goals.map((goal, idx) => (
                            <input key={idx} name={`goal${idx}`} type='text' value={goal} onChange={e => handleGoalChange(idx, e.target.value)}/>
                        ))}

                        <label>Describe the mood, vibe or style you want (required)</label>
                        <input type='text' name='mood' value={formData.mood} onChange={handleChange}/>
                    </div>

                    {/* Services Needed */}
                    <div className='ContactForm_Section'>
                        <h3>Services Needed (required)</h3>
                        <div className='ContactForm_Checkboxes'>
                            {["fullservice","partial","onsite"].map(service => (
                                <label key={service}>
                                    <input 
                                        type='radio' 
                                        name='services' 
                                        value={service} 
                                        onChange={handleChange}
                                        checked={formData.services === service}
                                        /> 
                                        {service.replace(/([a-z])([A-Z])/g, '$1 $2')}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Guest & Experience */}
                    <div className='ContactForm_Section'>
                        <h3>Guest & Experience Details</h3>
                        <label>Special requests</label>
                        <input type='text' name='special' value={formData.special} onChange={handleChange}/>

                        <p>Do you require gift curation or favor arrangements? (required)</p>
                        <div className='ContactForm_Checkboxes'>
                            {["yes","no"].map(opt => (
                                <label key={opt}>
                                    <input 
                                        type='radio' 
                                        name='gift' 
                                        value={opt} 
                                        onChange={handleChange}
                                        checked={formData.gift === opt}
                                        /> 
                                        {opt.charAt(0).toUpperCase() + opt.slice(1)}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Consent */}
                    <div className='ContactForm_Section'>
                        <h3>Consent</h3>
                        <p>I consent to the Kahi Company using this information to plan, coordinate, and design my event (required)</p>
                        <div className='ContactForm_Checkboxes'>
                            {["yes","no"].map(opt => (
                                <label key={opt}>
                                    <input 
                                        type='radio' 
                                        name='consent' 
                                        value={opt} 
                                        onChange={handleChange}
                                        checked={formData.consent === opt}
                                        /> 
                                        {opt.charAt(0).toUpperCase() + opt.slice(1)}
                                </label>
                            ))}
                        </div>
                    </div>

                    {errors.length > 0 && (
                    <div className="ContactForm_ErrorBox">
                        <strong>Please fix the following:</strong>
                            <ul>
                            {errors.map((err, i) => (
                            <li key={i}>{err}</li>
                        ))}
                            </ul>
                    </div>
)}
                    <button type='submit' className='ContactForm_Submit'>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;