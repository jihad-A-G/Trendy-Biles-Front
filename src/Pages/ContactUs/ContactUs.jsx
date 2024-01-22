import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactUs.css';
import FullLogo from '../../assets/FullLogo2.jpg';
import emailjs from 'emailjs-com';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the same credentials you provided earlier
    const serviceId = 'service_udck6x2';
    const templateId = 'template_dc3y09a';
    const userId = 'w2XEn16Vz2vNsS71k';

    const dataWithNames = {
      ...formData,
      from_name: `${formData.firstName} ${formData.lastName}`,
    };

    emailjs.send(serviceId, templateId, dataWithNames, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
        toast.success('Message sent successfully!', { position: 'top-right', autoClose: 3000 });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error('Failed to send message. Please try again later.', { position: 'top-right', autoClose: 3000 });
      });
  };

  return (
    <>
<div className="content-wrapper"> {/* This wrapper will prevent overlap */}
    <div className="Home-Parent">    <img className="Home-Parent-Image" src={FullLogo} alt="Trendy Biles logo" />
    <form className="Home-Parent-Form" onSubmit={handleSubmit}>
      <h1 className="Form-Header">CONTACT US</h1>
      <label className='Input-Label' htmlFor="firstName"> 
        First Name 
        <input
          className="Home-Form-Input"
          type="text"
          name="firstName"
          required
          placeholder="Enter First Name"
          onChange={handleChange}
          value={formData.firstName}
          id="firstName" 
        />
      </label>
      <label className='Input-Label' htmlFor="lastName">
        Last Name
        <input
          type="text"
          name="lastName"
          className="Home-Form-Input"
          required
          placeholder="Enter Last Name"
          onChange={handleChange}
          value={formData.lastName}
          id="lastName" 
        />
      </label>
      <label className='Input-Label' htmlFor="email">
        E-mail
        <input
          type="email"
          name="email"
          className="Home-Form-Input"
          required
          placeholder="Enter E-mail"
          onChange={handleChange}
          value={formData.email}
          id="email" 
        />
      </label>
      <label className='Input-Label' htmlFor="message">
          Message
          <textarea
            name="message"
            className="Home-Form-TextArea"
            required
            placeholder="Enter Message"
            onChange={handleChange}
            value={formData.message}
            id="message"
            rows="10" /* You can adjust the rows as well if needed */
          ></textarea>
        </label>
        <button type="submit" className="Home-Form-Button">SEND</button>
      </form>
    </div>
  </div>
  <ToastContainer />
</>
  );
}

export default ContactUs;
