const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
	},
	products: [
		{
			productId: Number,
			quantity: Number,
		},
	],
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
