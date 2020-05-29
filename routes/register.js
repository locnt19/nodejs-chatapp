var express = require('express');
var router = express.Router();
// const AccountController = require('../controllers/AccountController');
const Account = require('../models/Account');


router.get('/', function (req, res, next) {
  res.render('register.pug', { title: 'Đăng ký' });
});

router.post('/', function (req, res, next) {
  Account.find()
    .then(item => {
      res.status(200);
      res.render('register.pug', {data: item});
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
