const Account = require('../models/Account');

// Defining all methods and business logic for routes
module.exports = {
	// GET METHOD
	renderTemplateRegister: (req, res) => {
		res.render('register.pug', { title: 'Đăng ký' });
	},
	renderTemplateLogin: (req, res) => {
		res.render('login.pug', { title: 'Đăng nhập' });
	},

	// POST METHOD
	create: (req, res) => {
		Account.create(req.body)
			.then(res.redirect('/login'))
			.catch(err => res.status(422).json(err));
	},
};