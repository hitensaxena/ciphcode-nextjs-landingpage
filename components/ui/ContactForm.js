"use client";

import { useState } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

const formAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const inputAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <motion.form
      variants={formAnimation}
      initial="hidden"
      animate="visible"
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <motion.div variants={inputAnimation}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="form-input w-full"
          required
        />
      </motion.div>

      <motion.div variants={inputAnimation}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="form-input w-full"
          required
        />
      </motion.div>

      <motion.div variants={inputAnimation}>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="form-input w-full h-32"
          required
        />
      </motion.div>

      <motion.div variants={inputAnimation}>
        <button
          type="submit"
          className="button primary w-full"
        >
          Send Message
        </button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;