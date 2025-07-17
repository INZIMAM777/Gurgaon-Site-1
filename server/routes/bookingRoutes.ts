import express from 'express';
import { createBooking, getBookings } from '../controllers/bookingController';
import { requireAuth } from '../utils/auth';

const router = express.Router();

router.get('/', requireAuth, getBookings);
router.post('/', requireAuth, createBooking);

export default router; 