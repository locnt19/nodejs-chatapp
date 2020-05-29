const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');

router.route('/')
  .get(HomeController.renderTemplate)

module.exports = router;
