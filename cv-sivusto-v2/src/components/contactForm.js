import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/contactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to backend or perform validation
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group pb-4">
          <label htmlFor="name">Organisaation nimi:</label>
          <input
            type="text"
            className="form-control grey-textarea"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group pb-4">
          <label htmlFor="email" className='pb-2'>Sähköposti:</label>
          <input
            type="email"
            className="form-control grey-textarea"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group pb-5">
          <label htmlFor="message" className='pb-2'>Viesti:</label>
          <textarea
            className="form-control grey-textarea"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-secondary">Lähetä</button>
      </form>
    </div>
  );
};

export default ContactForm;
