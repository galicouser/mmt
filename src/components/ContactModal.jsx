import React, { useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import '../assets/css/modal.css'; // Import your CSS file for the modal
import backgroundImg from '../assets/images/contact_form/contact_form.jpeg';

const ContactModal = ({ isOpen, closeModal }) => {
  const initialValues = { name: '', email: '', phone: '', message: '', dateTime: '', captchaValue: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters long'),
    dateTime: Yup.string().required('Please select a date and time'),
    captchaValue: Yup.string().required('Please complete the reCAPTCHA'),
  });

  const recaptchaRef = useRef();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch('http://localhost:5000/api/quote', { // Update endpoint to /api/quote
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert('Message Sent Successfully!');
        resetForm();
        recaptchaRef.current.reset(); // Reset reCAPTCHA
        closeModal();
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('Error sending email. Please try again.');
    }
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <button className="close-modal" onClick={closeModal}>
            &times;
          </button>
          <h2 className="modal-title">Get a Free Quote</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Field type="text" name="name" className="form-control" />
                  <ErrorMessage name="name" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <Field type="text" name="phone" className="form-control" />
                  <ErrorMessage name="phone" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <Field as="textarea" name="message" className="form-control" rows="4" />
                  <ErrorMessage name="message" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <label htmlFor="dateTime">Select Date & Time</label>
                  <Field
                    type="datetime-local"
                    name="dateTime"
                    className="form-control"
                    onChange={(e) => setFieldValue('dateTime', e.target.value)}
                  />
                  <ErrorMessage name="dateTime" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}  // Replace with your reCAPTCHA site key
                    onChange={(value) => setFieldValue('captchaValue', value)}
                  />
                  <ErrorMessage name="captchaValue" component="div" className="error-message" />
                </div>
                
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    )
  );
};

export default ContactModal;
