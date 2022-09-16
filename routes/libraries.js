const express = require('express');
const router = express.Router();

const libraries  = require('../controllers/libraries')

router.route('/')
    .get(libraries.index)
    .get(libraries.renderNewForm)
    .post(libraries.createLibrary)

router.get('/new', libraries.renderNewForm)

router.get('/:id', libraries.showLibrary)

module.exports = router;