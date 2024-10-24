// controllers/appointmentController.js
import { sendEmail } from '../helpers/emailHelper.js';
import { verifyRecaptcha } from '../helpers/recaptchaHelper.js';
import { pool } from '../db/db.js';

export const appointmentController = async (req, res) => {
  const { name, email, phone, message, dateTime, captchaValue, latitude, longitude, address } = req.body;

  // Verify reCAPTCHA
  const isRecaptchaValid = await verifyRecaptcha(captchaValue);
  if (!isRecaptchaValid) {
    return res.status(400).json({ message: 'reCAPTCHA verification failed' });
  }

  // Prepare the email for the appointment
  const emailSubject = 'New Appointment';
  const emailText = `
  <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #333;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br>${message}</p>
      <p><strong>Date & Time:</strong> ${dateTime}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Latitude:</strong> ${latitude}</p>
      <p><strong>Longitude:</strong> ${longitude}</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="color: #888; font-size: 12px;">This message was sent from your website.</p>
    </body>
  </html>
  `;

  try {
    // Save the appointment details to PostgreSQL
    const query = `
      INSERT INTO appointments (name, email, phone, message, date_time, latitude, longitude, address)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;
    `;
    const values = [name, email, phone, message, dateTime, latitude, longitude, address];

    const result = await pool.query(query, values);

    // Send the confirmation email
    await sendEmail(email, emailSubject, emailText);

    res.status(200).json({ message: 'Appointment Booked', appointment: result.rows[0] });
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({ message: 'Failed to create Appointment' });
  }
};
