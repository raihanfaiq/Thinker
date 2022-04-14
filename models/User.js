import { stringify } from 'querystring';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
	},
	products: [
		{
			productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
			image: String,
			price: Number,
			name: String,
			quantity: Number,
		},
	],
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
