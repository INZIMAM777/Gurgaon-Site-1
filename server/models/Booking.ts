import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  date: Date,
  status: { type: String, default: 'pending' }
});

export default mongoose.model('Booking', bookingSchema); 