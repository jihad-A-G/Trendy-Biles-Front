import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";
import emailjs from "emailjs-com";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the same credentials you provided earlier
    const serviceId = "service_udck6x2";
    const templateId = "template_dc3y09a";
    const userId = "w2XEn16Vz2vNsS71k";

    const dataWithNames = {
      ...formData,
      from_name: `${formData.firstName} ${formData.lastName}`,
    };

    emailjs
      .send(serviceId, templateId, dataWithNames, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <form onSubmit={handleSubmit}>
              <h1 className="mb-4">CONTACT US</h1>
              <div className="mb-3">
                <label className="form-label" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  required
                  placeholder="Enter First Name"
                  onChange={handleChange}
                  value={formData.firstName}
                  id="firstName"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  required
                  placeholder="Enter Last Name"
                  onChange={handleChange}
                  value={formData.lastName}
                  id="lastName"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                  placeholder="Enter E-mail"
                  onChange={handleChange}
                  value={formData.email}
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  required
                  placeholder="Enter Message"
                  onChange={handleChange}
                  value={formData.message}
                  id="message"
                  rows="5"
                ></textarea>
              </div>
              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ backgroundColor: "#69a05d", border: "none" }}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ContactUs;
