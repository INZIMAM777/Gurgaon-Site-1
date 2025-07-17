import Review from '../models/Review';
import { Request, Response } from 'express';

export const createReview = async (req: Request, res: Response) => {
  const { userId, propertyId, rating, comment } = req.body;
  const review = await Review.create({ userId, propertyId, rating, comment });
  res.status(201).json(review);
};

export const getReviews = async (req: Request, res: Response) => {
  const reviews = await Review.find();
  res.json(reviews);
}; 