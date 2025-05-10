import { check } from 'express-validator';

export const bookActivityValidation = [
  check('activityId', 'Activity ID is required').notEmpty().isMongoId()
];