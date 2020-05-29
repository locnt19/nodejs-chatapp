
// Defining all methods and business logic for routes
module.exports = {
	// GET METHOD
	renderTemplate: (req, res) => {
		res.render('chat.pug', { title: 'Danh sách đang chat' });
	}
};