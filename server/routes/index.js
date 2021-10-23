const router = require('express').Router();
const { getOrgs } = require('../controllers');

router.get('/organizations', getOrgs);

module.exports = router;
