const router = require('express').Router();

const {getEvent} = require('../controllers');

router.get('/events/:id',getEvent);

module.exports = router;
