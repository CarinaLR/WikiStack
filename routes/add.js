const express = require('express');
const router = express.Router();
const models = require('../models');
const layout = require('../views/layout');
const addPage = require('../views/addPage')

module.exports = router;

router.get('/', (req, res) => {
  res.send(addPage(""));
});