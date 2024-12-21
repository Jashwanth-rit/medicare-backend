const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db");

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: process.env.FRONTEND_URL,
}));

// Connect to MongoDB
connectDB();

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

const port = process.env.PORT || 6600;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
