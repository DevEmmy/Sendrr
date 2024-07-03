'use client'
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Clear the error message for the field that is being edited
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {
      name: '',
      email: '',
      number: '',
      message: ''
    };

    if (!formData.name) {
      newErrors.name = 'Name is required.';
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format.';
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Message is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission
      console.log('Form data:', formData);
      alert('Form submitted successfully');
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="flex flex-col items-center py-32 px-3 ">
      <div className="w-full max-w-md p-8 bg-white rounded-lg faq-shadow">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-4 text-gray-600">
          Have questions or need assistance? Contact our support team.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`}
              placeholder="John Johnson"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`}
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`}
              placeholder="What is the issue?"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>} 
          </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-primary rounded-md ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
