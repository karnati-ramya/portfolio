import React, { useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
    if (formRef.current) {
      e.preventDefault();
      setMessage(true);

      emailjs
        .sendForm(
          "service_cisqd4g",
          "template_3oggu88",
          formRef.current,
          "IL3r4w-LxFzUru-yu"
        )
        .then(
          (result: any) => {
            console.log(result.text);
          },
          (error: any) => {
            console.log(error.text);
          }
        );

      e.target.reset();
    }
  };

  return (
    <div id="contact">
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-title">Contact</div>
          <div className="contact-subtitle">
            Feel free to reach out to me for any questions or opportunities!
          </div>
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="input-container">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Your Name"
                name="from_name"
                required
              />
            </div>
            <div className="input-container">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="Your Email"
                name="from_email"
                required
                pattern="[^ @]*@[^ @]*"
              />
            </div>
            <div className="input-container">
              <label className="form-label">Message</label>
              <textarea
                rows={3}
                name="message"
                className="form-input form-textarea"
                placeholder="What do you want to say?"
                required
              />
            </div>
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
          {message && (
            <div className="contact-subtitle">
              Thanks, I'll reply as soon as possible!!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
