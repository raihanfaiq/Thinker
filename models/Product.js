import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please add a name'],
		maxlength: [50, 'Name cannot be more than 50 characters'],
	},
	description: String,
	category: {
		type: String,
		enum: ['Softcopy', 'Hardcopy', 'Konsultasi'],
		default: 'Softcopy',
	},
	price: Number,
	diskon: {
		type: mongoose.Decimal128,
		default: 0,
	},
	kelas: Number,
	jurusan: String,
	kodeJenis: String,
	kodeMateri: String,
	mataPelajaran: String,
	linkGambar: {
		type: String,
		default: 'None',
	},
	penilaian: Number,
	rating: {
		type: mongoose.Decimal128,
		default: 0,
	},
	stok: Number,
	terjual: {
		type: Number,
		default: 0,
	},
	views: {
		type: Number,
		default: 1,
	},
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
