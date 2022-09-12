const express = require('express');
const router = express.Router();

const libraries  = require('../controllers/libraries')

router.route('/')
    .get(libraries.index)
    .get(libraries.renderNewForm)

router.get('/new', libraries.renderNewForm)

module.exports = router;