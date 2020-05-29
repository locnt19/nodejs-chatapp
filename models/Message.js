const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	fromUser: {
		type: String,
		default: "defaultFromUser"
	},
	toUser: {
		type: String,
		default: "defaulToUser"
	},
	message: {
		type: String,
		default: ''
	}
})

const Message = mongoose.model('Message', MessageSchema, 'message_list');

module.exports = Message;