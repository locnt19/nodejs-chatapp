const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
	username: {
		type: String,
		default: "defaultUserName"
	},
	password: {
		type: String,
		default: "defaulPassword"
	}
})

const Account = mongoose.model('Account', AccountSchema, 'account_list');

module.exports = Account;