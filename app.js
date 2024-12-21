const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Using Express' built-in json() middleware instead of body-parser
app.use(cors({
  origin: process.env.FRONTEND_URL, // Set CORS to accept requests from your frontend URL
}));

// Connect to MongoDB
connectDB();

// Import routes
const reminderRoutes = require('./routes/reminderRoutes');
const fireExtinguisherRoutes = require('./routes/fireExtinguisherRoutes');
const policeRoutes = require('./routes/policeRoutes');
const healthcareTakerRoutes = require('./routes/healthcareTakerRoutes');
const ambulanceRoutes = require('./routes/ambulanceRoutes');
const donationRoutes = require('./routes/donationRoutes');
const authRoutes = require('./routes/authRoutes');

// Use routes
app.use('/reminders', reminderRoutes);
app.use('/fire-extinguishers', fireExtinguisherRoutes);
app.use('/police-services', policeRoutes);
app.use('/healthcare-takers', healthcareTakerRoutes);
app.use('/ambulances', ambulanceRoutes);
app.use('/donations', donationRoutes);
app.use('/auth', authRoutes);

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

const port = process.env.PORT || 6600;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
