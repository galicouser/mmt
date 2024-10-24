// routes/appointmentRoutes.js
import express from 'express';
import { appointmentController } from '../controllers/appointmentController.js';

const router = express.Router();

// Define the route for appointment
router.post('/', appointmentController);

export default router;
