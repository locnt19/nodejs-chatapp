const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/AccountController');

router.route('/')
  .get(AccountController.renderTemplateLogin)

module.exports = router;
