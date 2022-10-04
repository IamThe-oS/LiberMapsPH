const express = require('express');
const router = express.Router();

const reviews = require('../controllers/reviews')

router.post('/', reviews.createReview)

module.exports = router;