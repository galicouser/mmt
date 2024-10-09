const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express(); 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Helper function for reCAPTCHA verification
async function verifyRecaptcha(captchaValue) {
  const secretKey = '6LcPK1wqAAAAAGbDr3zABKOzQPdajUjRy-tIMc78'; // replace with your actual secret key
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`;
  
  const response = await fetch(verifyUrl, { method: 'POST' });
  const data = await response.json();
  return data.success;
}

// Helper function to send emails using Nodemailer
async function sendEmail(fromEmail, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'admin@domainstacks.net', // your email
      pass: 'tdtdakehjinnkspk', // your email password
    },
  });

  const mailOptions = {
    from: fromEmail,
    to: 'admin@domainstacks.net', // your receiving email
    subject: subject,
    text: text,
  };

  return transporter.sendMail(mailOptions);
}

// Contact Us form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message, captchaValue } = req.body;

  // Verify reCAPTCHA
  const isRecaptchaValid = await verifyRecaptcha(captchaValue);
  if (!isRecaptchaValid) {
    return res.status(400).json({ message: 'reCAPTCHA verification failed' });
  }

  // Prepare the email
  const emailSubject = 'New Contact Form Submission';
  const emailText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  try {
    await sendEmail(email, emailSubject, emailText);
    res.status(200).json({ message: 'Contact form message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send contact form message' });
  }
});

// Get a Quote form endpoint
app.post('/api/quote', async (req, res) => {
  const { name, email, phone, serviceType, captchaValue } = req.body;

  // Verify reCAPTCHA
  const isRecaptchaValid = await verifyRecaptcha(captchaValue);
  if (!isRecaptchaValid) {
    return res.status(400).json({ message: 'reCAPTCHA verification failed' });
  }

  // Prepare the email for the quote
  const emailSubject = 'New Get a Quote Form Submission';
  const emailText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService Type: ${serviceType}`;

  try {
    await sendEmail(email, emailSubject, emailText);
    res.status(200).json({ message: 'Quote request sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send quote request' });
  }
});

module.exports = app;