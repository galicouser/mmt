// src/components/ContactForm.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import '../assets/css/layout.css';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Message sent!');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>

      <div>
        <label>Email:</label>
        <input {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>

      <div>
        <label>Message:</label>
        <textarea {...register("message", { required: true })}></textarea>
        {errors.message && <span>This field is required</span>}
      </div>

      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
