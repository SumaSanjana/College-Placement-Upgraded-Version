require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { PeerServer } = require('peer');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
require('./config/db')();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/student', require('./routes/student'));
app.use('/api/recruiter', require('./routes/recruiter'));
app.use('/api/admin', require('./routes/admin'));

// PeerJS Server
const peerServer = PeerServer({ port: 9000, path: '/peerjs' });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));