var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('chat.pug', { title: 'Danh sách đang chat' });
});

module.exports = router;
