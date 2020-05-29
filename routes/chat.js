const express = require('express');
const router = express.Router();
const ChatController = require('../controllers/ChatController');

router.route('/')
  .get(ChatController.renderTemplate)

module.exports = router;
