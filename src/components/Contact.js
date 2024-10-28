import React, { useState } from 'react';
import location from '../assests/location.png';
import mobile from '../assests/Mobile.png';
import mail from '../assests/mail.png';

const Contact = () => {
  // Reusable Tailwind CSS classes
  const labelDesign = 'block my-4 text-lg md:text-[1.2rem] font-medium text-gray';
  const inputDesign = 'block w-full my-2 px-4 py-2 text-lg rounded-md bg-background-gray outline-none';
  const contactBoxDesign = 'flex flex-col items-center justify-between w-full p-4 md:p-6 bg-base-white text-gray md:h-1/3';
  const textRowDesign = 'flex justify-between w-full text-sm md:text-base lg:text-xl';
  const smallTextDesign = 'text-right text-base lg:text-lg';
  const iconContainer = 'flex items-center justify-center w-8 h-8 mb-4 p-2 rounded-full bg-yellow md:mb-6 md:w-9 md:h-9';


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // FORM VALIDATIONS 
  const validateForm = () => {
    const formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      formErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  // SUBMIT FORM 
  const submitForm = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log('Submitting form data:', formData);

    try {
      const response = await fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error in submitting form');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
      alert('Hurray!! Form Submitted');

      // Clearing the form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setErrors({});
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col px-4 py-12 my-14 tracking-wide bg-background-gray md:flex-row md:mx-20 md:space-x-6">
      {/* LEAVE ME YOUR INFO SECTION */}
      <div className="w-full mb-10 md:mb-0 md:w-2/3">
        <h1 className="text-2xl font-semibold text-word-gray md:text-3xl lg:text-4xl">
          Leave ME Your Info
        </h1>
        <div className="h-auto px-6 py-4 mt-6 bg-base-white md:h-[50rem]">
          <form>
            <label className={labelDesign}>
              Your Full Name (Required)
              <input
                className={inputDesign}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </label>

            <label className={labelDesign}>
              Email (Required)
              <input
                className={inputDesign}
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </label>

            <label className={labelDesign}>
              Subject
              <input
                className={inputDesign}
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
              {errors.subject && <p className="text-red-500">{errors.subject}</p>}
            </label>

            <label className={labelDesign}>
              Your Message
              <textarea
                className={`${inputDesign} h-40 md:h-48 resize-none`}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              {errors.message && <p className="text-red-500">{errors.message}</p>}
            </label>

            <button
              onClick={submitForm}
              className="px-4 py-2 mt-4 font-semibold rounded-md bg-yellow"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* CONTACT INFORMATION SECTION */}
      <div className="w-full md:w-1/3">
        <h1 className="text-2xl font-semibold text-word-gray md:text-3xl lg:text-4xl">
          Contact Information
        </h1>

        <div className="flex flex-col h-auto mt-6 space-y-6 md:space-y-4 md:h-[50rem]">
          {/* Location Information */}
          <div className={contactBoxDesign}>
            <div className={iconContainer}>
              <img src={location} alt="location" />
            </div>
            <div className={textRowDesign}>
              <span className="font-medium">Country:</span>
              <span className={smallTextDesign}>Bangladesh</span>
            </div>
            <div className={textRowDesign}>
              <span className="font-medium">City:</span>
              <span className={smallTextDesign}>Dhaka</span>
            </div>
            <div className={textRowDesign}>
              <span className="font-medium">Street:</span>
              <span className={smallTextDesign}>35 Vhatara, Badda</span>
            </div>
          </div>

          {/* Email Information */}
          <div className={contactBoxDesign}>
            <div className={iconContainer}>
              <img src={mail} alt="mail" />
            </div>
            <div className={textRowDesign}>
              <span className="font-medium">Email:</span>
              <span className={smallTextDesign}>yourmail@gmail.com</span>
            </div>
            <div className={textRowDesign}>
              <span className="font-medium">Skype:</span>
              <span className={smallTextDesign}>@YourUsername</span>
            </div>
            <div className={textRowDesign}>
              <span className="font-medium">Telegram:</span>
              <span className={smallTextDesign}>@YourUsername</span>
            </div>
          </div>

          {/* Phone Information */}
          <div className={contactBoxDesign}>
            <div className={iconContainer}>
              <img src={mobile} alt="mobile" />
            </div>
            <div className={textRowDesign}>
              <span className="font-medium">Support Service:</span>
              <span className={smallTextDesign}>15369</span>
            </div>
            <div className={textRowDesign}>
              <span className="font-medium">Office:</span>
              <span className={smallTextDesign}>+58 (021) 956 587 235</span>
            </div>
            <div className={textRowDesign}>
              <span className="font-medium">Personal:</span>
              <span className={smallTextDesign}>+58 (021) 956 587 235</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
