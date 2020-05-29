const express = require('express');
const router = express.Router();

const HomeRoutes = require('./home');
const RegisterRoutes = require('./register');
const LoginRoutes = require('./login');
const ChatRoutes = require('./chat');


router.use('/', HomeRoutes);
router.use('/register', RegisterRoutes)
router.use('/login', LoginRoutes)
router.use('/chat', ChatRoutes)

module.exports = router;
