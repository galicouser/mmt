import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import '../assets/css/modal.css';
// import '../assets/css/calendar.css';
import backgroundImg from '../assets/images/contact_form/contact_form.jpeg';

const now = new Date();
const startOfToday = new Date();
startOfToday.setHours(0, 0, 0, 0);

const endOfToday = new Date(startOfToday);
endOfToday.setDate(endOfToday.getDate() + 1);
endOfToday.setSeconds(endOfToday.getSeconds() - 1);

const ContactModal = ({ isOpen, closeModal }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(startOfToday);
  const recaptchaRef = useRef();

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
    dateTime: null,
    captchaValue: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters long'),
    dateTime: Yup.date().required('Please select a date and time').min(startOfToday, 'Date must be today or later'),
    captchaValue: Yup.string().required('Please complete the reCAPTCHA'),
  });

  const fetchBookedSlots = async () => {
    const calendarId = 'primary';
    const apiKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY; // Ensure this key is set correctly
    const timeMin = new Date();
    const timeMax = new Date();
    timeMax.setDate(timeMax.getDate() + 7);

    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${timeMin.toISOString()}&timeMax=${timeMax.toISOString()}&singleEvents=true&orderBy=startTime`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch booked slots');
      }

      const data = await response.json();
      const bookedSlots = data.items.map(event => event.start.dateTime || event.start.date);
      return bookedSlots;
    } catch (error) {
      console.error('Error fetching booked slots:', error);
      return [];
    }
  };

  const generateAvailableSlots = (slots) => {
    console.log('Booked slots:', slots);
  };

  useEffect(() => {
    const loadBookedSlots = async () => {
      const slots = await fetchBookedSlots();
      generateAvailableSlots(slots);
    };

    if (isOpen) {
      loadBookedSlots();
    }
  }, [isOpen]);

  const handleSubmit = async (values, { resetForm }) => {
    console.log('Submitting form with values:', values);
    try {
      const response = await fetch('http://localhost:5000/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, dateTime: selectedDateTime }),
      });

      if (response.ok) {
        console.log('Form submission successful.');
        alert('Message Sent Successfully!');
        resetForm();
        recaptchaRef.current.reset();
        closeModal();
      } else {
        console.error('Form submission failed:', response);
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('Error sending email. Please try again.');
    }
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div
          className="modal-content"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
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
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDateTimePicker
                      value={selectedDateTime}
                      onChange={(newValue) => {
                        setSelectedDateTime(newValue);
                        setFieldValue('dateTime', newValue);
                      }}
                      minDate={startOfToday}  // Restrict to today and future dates
                      renderInput={(params) => <Field as="input" {...params} className="form-control" />}
                    />
                  </LocalizationProvider>
                  <ErrorMessage name="dateTime" component="div" className="error-message" />
                </div>
                <div className="form-group">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    onChange={(value) => setFieldValue('captchaValue', value)}
                  />
                  <ErrorMessage name="captchaValue" component="div" className="error-message" />
                </div>

                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send'}
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
