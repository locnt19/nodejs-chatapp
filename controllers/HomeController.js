
// Defining all methods and business logic for routes
module.exports = {
	// GET METHOD
	renderTemplate: (req, res) => {
		res.render('index.pug', { title: 'NodeJS - Chat app real-time' });
	}
};