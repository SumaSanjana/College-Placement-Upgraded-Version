const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'recruiter', 'admin'], required: true },
  profile: {
    name: String,
    cgpa: { type: Number, min: 0, max: 10 },
    academicDetails: {
      degree: String,
      institution: String,
      year: Number
    },
    personalDetails: {
      phone: String,
      address: String
    },
    resume: String // Cloudinary URL
  },
  company: { type: String }, // For recruiters
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);