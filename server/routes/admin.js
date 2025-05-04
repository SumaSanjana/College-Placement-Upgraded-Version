const express = require('express');
const User = require('../models/User');
const Job = require('../models/Job');
const auth = require('../middleware/auth');
const router = express.Router();

// Get insights
router.get('/insights', auth(['admin']), async (req, res) => {
  try {
    const students = await User.countDocuments({ role: 'student' });
    const recruiters = await User.countDocuments({ role: 'recruiter' });
    const jobs = await Job.countDocuments();
    const applications = await Job.aggregate([
      { $unwind: '$applicants' },
      { $group: { _id: null, count: { $sum: 1 } } }
    ]);

    res.json({
      students,
      recruiters,
      jobs,
      applications: applications[0]?.count || 0
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;