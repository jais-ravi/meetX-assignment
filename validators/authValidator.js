import { check } from 'express-validator';

export const registerValidation = [
  check('name', 'Name is required').notEmpty(),
  check('email', 'Please enter a valid email').isEmail(),
  check('phone', 'Phone must be at least 10 digits').isLength({ min: 10 }),
  check('password', 'Password must be 6+ characters').isLength({ min: 6 }),
];

export const loginValidation = [
  check('email', 'Please enter a valid email').isEmail(),
  check('password', 'Password is required').notEmpty(),
];