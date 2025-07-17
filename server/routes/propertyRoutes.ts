import express from 'express';
import { getProperty, createProperty } from '../controllers/propertyController';

const router = express.Router();

router.get('/:id', getProperty);
router.post('/', createProperty);

export default router; 