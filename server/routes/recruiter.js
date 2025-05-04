const express = require('express');
const { body } = require('express-validator');
const User = require('../models/User');
const Job = require('../models/Job');
const Interview = require('../models/Interview');
const auth = require('../middleware/auth');
const { validate, jobValidations } = require('../middleware/validate');
const router = express.Router();

router.post('/job', auth(['recruiter']), validate(jobValidations), async (req, res) => {
  try {
    const job = new Job({
      ...req.body,
      recruiter: req.user.id
    });
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/applicants/:jobId', auth(['recruiter']), async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId).populate('applicants.student', 'profile');
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job.applicants);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/jobs', auth(['recruiter', 'student']), async (req, res) => {
  try {
    const jobs = await Job.find({}).select('title description company salary place createdAt');
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/interview', auth(['recruiter']), validate([
  body('jobId').notEmpty().withMessage('Job ID is required'),
  body('studentId').notEmpty().withMessage('Student ID is required'),
  body('scheduledAt').isISO8601().withMessage('Invalid date')
]), async (req, res) => {
  try {
    const { jobId, studentId, scheduledAt } = req.body;
    const peerId = `interview-${jobId}-${studentId}-${Date.now()}`;
    const interview = new Interview({
      job: jobId,
      student: studentId,
      recruiter: req.user.id,
      peerId,
      scheduledAt
    });
    await interview.save();

    await Job.findByIdAndUpdate(jobId, {
      $set: { 'applicants.$[elem].status': 'interview' },
      arrayFilters: [{ 'elem.student': studentId }]
    });

    res.status(201).json(interview);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/decision/:jobId/:studentId', auth(['recruiter']), validate([
  body('status').isIn(['accepted', 'rejected']).withMessage('Invalid status')
]), async (req, res) => {
  try {
    const { jobId, studentId } = req.params;
    const { status } = req.body;
    await Job.findByIdAndUpdate(jobId, {
      $set: { 'applicants.$[elem].status': status },
      arrayFilters: [{ 'elem.student': studentId }]
    });
    res.json({ message: `Student ${status}` });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;