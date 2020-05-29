var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('register.pug', { title: 'Đăng ký' });
});

module.exports = router;
