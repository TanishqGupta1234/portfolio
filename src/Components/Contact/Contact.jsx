import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    const [result, setResult] = useState(""); // State to manage submission result

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1d62086b-7124-49d7-ada2-756f27b198cc");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm available for the internship....You can contact me during working hours</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail Icon" />
                            <p>Tanishq.101823@stu.upes.ac.in</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call Icon" />
                            <p>7060009067</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location Icon" />
                            <p>UPES, Dehradun</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder='Enter Your Name' name='name' required />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder='Enter Your Email' name='email' required />
                    <label htmlFor="message">Write Your Message here...</label>
                    <textarea id="message" name="message" rows="8" placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>
            {result && <p className="submission-result">{result}</p>} {/* Display submission result */}
        </div>
    );
}

export default Contact;