import Booking from '../models/Booking';
import { Request, Response } from 'express';

export const createBooking = async (req: Request, res: Response) => {
  const { userId, propertyId, date } = req.body;
  const booking = await Booking.create({ userId, propertyId, date });
  res.status(201).json(booking);
};

export const getBookings = async (req: Request, res: Response) => {
  const bookings = await Booking.find();
  res.json(bookings);
}; 