import express from 'express';
import { createReview, getReviews } from '../controllers/reviewController';
import { requireAuth } from '../utils/auth';

const router = express.Router();

router.get('/', getReviews);
router.post('/', requireAuth, createReview);

export default router; 