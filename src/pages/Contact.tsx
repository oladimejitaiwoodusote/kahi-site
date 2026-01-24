import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/Contact.css";
import Contact_1 from "../assets/Contact Us.jpg";
import useParallaxHeader from "../hooks/useParralaxHeader";
import emailjs from "@emailjs/browser";

function Contact() {
  useParallaxHeader({
    heroSelector: ".Contact_Image",
  });

  useEffect(()=> {
    document.title = "Contact Us | The Kahi Company"
  })

  // ============================
  // UNIQUE ID + DATE
  // ============================

  const generateMeta = () => {
    const now = new Date();

    const formattedDate = now.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });

    const id = `KAHI-${now.getFullYear()}${String(
      now.getMonth() + 1
    ).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    return { id, time: formattedDate };
  };

  const [{ id: submissionId, time: submissionTime }, setSubmissionMeta] =
    useState(generateMeta());

  // ============================

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

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<string[]>([]);

  // ============================
  // HANDLERS
  // ============================

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoalChange = (index: number, value: string) => {
    setFormData((prev) => {
      const newGoals = [...prev.goals];
      newGoals[index] = value;
      return { ...prev, goals: newGoals };
    });
  };

  // ============================
  // SUBMIT
  // ============================

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
      // 🔥 META
      time: submissionTime,
      id: submissionId,
    };

    // ============================
    // VALIDATION
    // ============================

    const newErrors: string[] = [];

    if (!payload.fullname) newErrors.push("Full name is required");
    if (!payload.email) newErrors.push("Email is required");
    if (!payload.contact_method)
      newErrors.push("Contact method is required");
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
        alert(`Form submitted! Reference ID: ${submissionId}`);
        form.reset();
        setErrors([]);
        setFormData(initialFormState);
        // regenerate ID + date for next submission
        setSubmissionMeta(generateMeta());
      })
      .catch(() => alert("Oops, something went wrong."));
  };

  // ============================
  // RENDER
  // ============================

  return (
    <div className="Contact">
      <div className="Contact_Image">
        <img src={Contact_1} alt="Contact Us" />
        <h1>Contact Us</h1>
      </div>

      <div className="Contact_Blurb">
        <h2>Client Consultation Form</h2>
        <p>
          Thank you for choosing The Kahi Company! Please fill out this form so we
          can understand your vision and create a memorable event tailored just
          for you.
        </p>
      </div>

      <div className="Contact_Form_div">
        <form className="ContactForm" onSubmit={handleSubmit}>
          {/* Client Information */}
          <div className="ContactForm_Section">
            <h3>Client Information</h3>

            <label>Fullname (required)</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
            />

            <label>Business / Organization</label>
            <input
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
            />

            <label>Email Address (required)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Phone Number (required)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <p>Preferred method of contact (required)</p>
            <div className="ContactForm_Checkboxes">
              {["email", "phone", "whatsapp"].map((method) => (
                <label key={method}>
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={formData.contactMethod === method}
                    onChange={handleChange}
                  />
                  {method.charAt(0).toUpperCase() + method.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Event Overview */}
          <div className="ContactForm_Section">
            <h3>Event Overview</h3>

            <p>Type of Event (required)</p>
            <div className="ContactForm_Checkboxes">
              {[
                "wedding",
                "birthday",
                "anniversary",
                "babyshower",
                "cooperate",
                "product",
                "other",
              ].map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="eventtype"
                    value={type}
                    checked={formData.eventtype === type}
                    onChange={handleChange}
                  />
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>

            <label>Event Date</label>
            <input
              type="text"
              name="eventdate"
              value={formData.eventdate}
              onChange={handleChange}
            />

            <label>Event Location</label>
            <input
              type="text"
              name="eventlocation"
              value={formData.eventlocation}
              onChange={handleChange}
            />

            <label>Number of Guests</label>
            <input
              type="text"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            />
          </div>

          {/* Event Goals & Vision */}
          <div className="ContactForm_Section">
            <h3>Event Goals & Vision</h3>

            <label>Event Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />

            <label>Top 3 Goals</label>
            {formData.goals.map((goal, idx) => (
              <input
                key={idx}
                name={`goal${idx}`}
                type="text"
                value={goal}
                onChange={(e) => handleGoalChange(idx, e.target.value)}
              />
            ))}

            <label>Mood / Vibe</label>
            <input
              type="text"
              name="mood"
              value={formData.mood}
              onChange={handleChange}
            />
          </div>

          {/* Services Needed */}
          <div className="ContactForm_Section">
            <h3>Services Needed (required)</h3>
            <div className="ContactForm_Checkboxes">
              {["fullservice", "partial", "onsite"].map((service) => (
                <label key={service}>
                  <input
                    type="radio"
                    name="services"
                    value={service}
                    checked={formData.services === service}
                    onChange={handleChange}
                  />
                  {service.replace(/([a-z])([A-Z])/g, "$1 $2")}
                </label>
              ))}
            </div>
          </div>

          {/* Guest & Experience */}
          <div className="ContactForm_Section">
            <h3>Guest & Experience Details</h3>

            <label>Special Requests / Guest Experience</label>
            <input
              type="text"
              name="special"
              value={formData.special}
              onChange={handleChange}
            />

            <p>Gift / Favor Arrangements (required)</p>
            <div className="ContactForm_Checkboxes">
              {["yes", "no"].map((opt) => (
                <label key={opt}>
                  <input
                    type="radio"
                    name="gift"
                    value={opt}
                    checked={formData.gift === opt}
                    onChange={handleChange}
                  />
                  {opt.charAt(0).toUpperCase() + opt.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Consent */}
          <div className="ContactForm_Section">
            <h3>Consent (required)</h3>
            <p>
              I consent to the Kahi Company using this information to plan,
              coordinate, and design my event.
            </p>
            <div className="ContactForm_Checkboxes">
              {["yes", "no"].map((opt) => (
                <label key={opt}>
                  <input
                    type="radio"
                    name="consent"
                    value={opt}
                    checked={formData.consent === opt}
                    onChange={handleChange}
                  />
                  {opt.charAt(0).toUpperCase() + opt.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* Errors */}
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

          {/* Submit */}
          <button type="submit" className="ContactForm_Submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
