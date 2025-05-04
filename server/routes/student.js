const express = require('express');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const User = require('../models/User');
const Job = require('../models/Job');
const auth = require('../middleware/auth');
const { validate, profileValidations } = require('../middleware/validate');
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.get('/profile', auth(['student']), async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('profile');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user.profile || {});
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/profile', auth(['student']), upload.single('resume'), validate(profileValidations), async (req, res) => {
  try {
    let resumeUrl;
    if (req.file) {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: 'image' },
        (error, result) => {
          if (error) throw new Error('Cloudinary upload failed');
          resumeUrl = result.secure_url;
        }
      );
      uploadStream.end(req.file.buffer);
      await new Promise(resolve => uploadStream.on('finish', resolve));
    }

    const updatedProfile = {
      ...req.body.profile,
      resume: resumeUrl || req.body.profile.resume
    };

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { profile: updatedProfile },
      { new: true }
    );
    res.json(user.profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/apply/:jobId', auth(['student']), async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    const alreadyApplied = job.applicants.some(app => app.student.toString() === req.user.id);
    if (alreadyApplied) return res.status(400).json({ message: 'Already applied' });

    job.applicants.push({ student: req.user.id });
    await job.save();
    res.json({ message: 'Application submitted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;