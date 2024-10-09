// server.js (Node.js Express setup)

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message, captchaValue } = req.body;

  // Verify reCAPTCHA
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=YOUR_RECAPTCHA_SECRET_KEY&response=${captchaValue}`;
  
  const response = await fetch(verifyUrl, { method: 'POST' });
  const data = await response.json();

  if (!data.success) {
    return res.status(400).json({ message: 'reCAPTCHA verification failed' });
  }

  // Set up Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'YOUR_EMAIL@gmail.com', // your email
      pass: 'YOUR_EMAIL_PASSWORD', // your email password
    },
  });

  const mailOptions = {
    from: email,
    to: 'YOUR_ADMIN_EMAIL@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send message' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
