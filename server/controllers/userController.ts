import { Request, Response } from 'express';
import { User } from '../models/User';

// Mock data for demonstration
const users: User[] = [];

export const getUser = (req: Request, res: Response) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

export const createUser = (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const newUser: User = {
    id: (users.length + 1).toString(),
    name,
    email,
    password,
    createdAt: new Date(),
  };
  users.push(newUser);
  res.status(201).json(newUser);
}; 