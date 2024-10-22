import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
dotenv.config(); // Load environment variables from .env file

const allowedOrigins = ['http://localhost:5137', 'https://maggiesmagictouch.com/'];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request if origin is in the allowed list
    } else {
      callback(new Error('Not allowed by CORS')); // Deny the request
    }
  },
  credentials: true, // If you need to allow cookies or authentication headers
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.json());

const paths = ['/', '/contact', '/services','/about',];

app.use(express.static(path.join(__dirname, '../dist')));

const filePath = path.join(__dirname, '../dist/index.html'); // Example file path

paths.forEach((route) => {
  app.get(route, (req, res) => {
    res.sendFile(filePath, (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
});

// Helper function for reCAPTCHA verification
async function verifyRecaptcha(captchaValue) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Use the environment variable
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaValue}`;

  const response = await fetch(verifyUrl, { method: 'POST' });
  const data = await response.json();
  return data.success;
}

// Helper function to send emails using Nodemailer
async function sendEmail(toEmail, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Use the environment variable
      pass: process.env.GMAIL_PASS, // Use the environment variable
    },
  });

  const mailOptions = {
    to: toEmail,
    from: process.env.GMAIL_USER, // Use the environment variable
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
  const { name, email, phone, message, dateTime, captchaValue } = req.body;

  // Log the incoming data to verify it's being received correctly
  console.log('Received data from quote form:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Message:', message);
  console.log('DateTime:', dateTime);
  console.log('Captcha Value:', captchaValue);

  // Verify reCAPTCHA
  const isRecaptchaValid = await verifyRecaptcha(captchaValue);
  if (!isRecaptchaValid) {
    return res.status(400).json({ message: 'reCAPTCHA verification failed' });
  }

  // Prepare the email for the quote
  const emailSubject = 'New Get a Quote Form Submission';
  const emailText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\nDateTime: ${dateTime}`;

  try {
    await sendEmail(email, emailSubject, emailText);
    res.status(200).json({ message: 'Quote request sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send quote request' });
  }
});

// Export the app for use in index.js
export default app;
