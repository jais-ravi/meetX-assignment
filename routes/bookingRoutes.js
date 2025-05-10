import express from 'express';
import { bookActivity, getMyBookings } from '../controllers/bookingController.js';
import { bookActivityValidation } from '../validators/bookingValidator.js';
import { validate } from '../middleware/validate.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, bookActivityValidation, validate, bookActivity);
router.get('/', protect, getMyBookings);

export default router;