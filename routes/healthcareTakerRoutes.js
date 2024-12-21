const express = require('express');
const router = express.Router();
const healthcareTakersController = require('../controllers/healthcareTakersController');

// Route to get all healthcare takers
router.get('/healthcare-takers', healthcareTakersController.getHealthcareTakers);

module.exports = router;
