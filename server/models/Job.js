const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: String, required: true },
  salary: { type: Number, required: true, min: 0 },
  place: { type: String, required: true },
  recruiter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  applicants: [{
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['applied', 'interview', 'accepted', 'rejected'], default: 'applied' }
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);