const { body, validationResult } = require('express-validator');

const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };
};

const registerValidations = [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('role').isIn(['student', 'recruiter', 'admin']).withMessage('Invalid role')
];

const profileValidations = [
  body('profile.name').notEmpty().withMessage('Name is required'),
  body('profile.cgpa').isFloat({ min: 0, max: 10 }).optional().withMessage('CGPA must be between 0 and 10'),
  body('profile.academicDetails.degree').optional().notEmpty().withMessage('Degree cannot be empty'),
  body('profile.personalDetails.phone').optional().isMobilePhone().withMessage('Invalid phone number')
];

const jobValidations = [
  body('title').notEmpty().withMessage('Job title is required'),
  body('description').notEmpty().withMessage('Job description is required'),
  body('company').notEmpty().withMessage('Company name is required'),
  body('salary').isFloat({ min: 0 }).withMessage('Salary must be a positive number'),
  body('place').notEmpty().withMessage('Job location is required')
];

module.exports = { validate, registerValidations, profileValidations, jobValidations };