const express = require('express');
const router = express.Router();
const models = require('../models');
const layout = require('../views/layout');

module.exports = router;

router.get('/', (req, res) => {
  res.send(layout(''));
});
