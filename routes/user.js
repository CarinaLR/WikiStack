const express = require('express');
const router = express.Router();
const models = require('../models');
const layout = require('../views/layout');
const userPage = require('../views/userList')
module.exports = router;


router.get('/', (req, res) => {
  res.send(userPage([]));
});