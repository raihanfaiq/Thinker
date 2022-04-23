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
	address: [
		{
			namaLengkap: String,
			noTelp: String,
			kodePos: String,
			kota: String,
			jalan: String,
			detailLain: String,
			tandaiSebagai: String,
			alamatUtama: Boolean,
		},
	],
	provider: {
		nama: String,
		harga: Number,
		layanan: String,
	},
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
