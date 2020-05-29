const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/AccountController');

router.route('/')
  .get(AccountController.renderTemplateRegister)
  .post(AccountController.create)

module.exports = router;
