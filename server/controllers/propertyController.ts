// Property controller: only export handler functions from this file
import Property from '../models/Property';
import { Request, Response } from 'express';

export const getProperty = async (req: Request, res: Response) => {
  const property = await Property.findById(req.params.id);
  if (!property) return res.status(404).json({ message: 'Property not found' });
  res.json(property);
};

export const createProperty = async (req: Request, res: Response) => {
  const { title, description, price, location, ownerId } = req.body;
  const newProperty = await Property.create({ title, description, price, location, ownerId });
  res.status(201).json(newProperty);
}; 