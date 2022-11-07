const express = require('express');
const router = express.Router();

const reviews = require('../controllers/reviews')

router.post('/', reviews.createReview)

router.delete('/:reviewId', reviews.deleteReview)  

module.exports = router;