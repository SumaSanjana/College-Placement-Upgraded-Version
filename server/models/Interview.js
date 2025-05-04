const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recruiter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  peerId: { type: String, required: true },
  scheduledAt: { type: Date, required: true },
  status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], default: 'scheduled' }
});

module.exports = mongoose.model('Interview', InterviewSchema);