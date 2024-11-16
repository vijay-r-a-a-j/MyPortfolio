// src/components/ContactForm.jsx
import React, { useState } from 'react';
import Handshakeimg from "../../assets/HandShake.jpg"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission logic
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' }); // Clear form
  };

  return (
    <div className='py-10 bg-[#ebf0f3]' id='contact'>
    <h1 className='text-5xl font-bold text-indigo-950 underline mb-10 text-center'>Contact Me</h1>
    <div className='flex flex-wrap md:flex-nowrap gap-5 lg:mx-20 '>
      
      <div className='md:w-1/2 my-auto  p-3'>
         <img className=' rounded-lg' src={Handshakeimg}/>
      </div>
    <div className="md:w-1/2 bg-slate-50 max-w-md mx-auto shadow-md rounded-lg p-5 md:p-10 ">
      
      {isSubmitted && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-6 text-center">
          Message Sent Successfully!
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-800">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border  bg-slate-50 rounded-lg border-b-4  focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            placeholder='Enter your Name'
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-800">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border  bg-slate-50 rounded-lg border-b-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
             placeholder='Enter your Mobile No'
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-800">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className="w-full px-4 py-2 border bg-slate-50  rounded-lg border-b-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            required
            placeholder='Enter your Email'
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-800">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border bg-slate-50   rounded-lg border-b-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            required
             placeholder='Write a Message'
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-5 bg-indigo-950 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
    </div>
    </div>
  );
}
