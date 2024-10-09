// src/components/Contact.jsx

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import backgroundImg from '../assets/images/services/background.jpeg'; // Adjust this path to your background image
import contact_form_img from '../assets/images/contact_form/contact_form.jpeg';

const Contact = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (!captchaValue) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, captchaValue }),
      });

      if (response.ok) {
        setSubmitted(true);
        resetForm();
        setCaptchaValue(null);
      } else {
        alert('Something went wrong, please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section 
      className="flex bg-gray-100 py-10" 
      style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Contact Us</h2>
      {submitted && <p className="text-green-500 text-center">Message sent successfully!</p>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit} 
      >
        {({ isSubmitting }) => (
          <Form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md" style={{ backgroundImage: `url(${contact_form_img})`, backgroundSize: 'cover', backgroundPosition: '' }}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Field type="text" name="name" className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500" />
              <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Field type="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500" />
              <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <Field type="text" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500" />
              <ErrorMessage name="phone" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Field as="textarea" name="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500" />
              <ErrorMessage name="message" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={setCaptchaValue}
              className="mb-4"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Send Message
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </section>
  );
};

export default Contact;
