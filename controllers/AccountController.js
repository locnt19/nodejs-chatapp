const Account = require('../models/Account');

// Defining all methods and business logic for routes
module.exports = {
	// POST
	create: function (req, res) {
		Account.create(req.body)
			.then(item => res.json(item))
			.catch(err => res.status(422).json(err));
	},
};