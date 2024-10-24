// routes/index.js
import express from 'express';
import contactRoutes from './contactRoutes.js';
import appointmentRoutes from './appointmentRoutes.js';

const router = express.Router();

// Use the imported routes
router.use('/contact', contactRoutes);
router.use('/appointment', appointmentRoutes);

export default router;
