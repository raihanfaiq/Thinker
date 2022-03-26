import mongoose from 'mongoose';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import { Md10K } from 'react-icons/md';
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
	url: String,
	filename: String,
});

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please add a name'],
		maxlength: [50, 'Name cannot be more than 50 characters'],
	},
	description: String,
	category: {
		type: String,
		enum: ['Softcopy', 'Hardcopy'],
		default: 'Softcopy',
	},
	price: Number,
	diskon: {
		type: mongoose.Decimal128,
		default: 0,
	},
	kelas: Number,
	kodeJenis: String,
	kodeMateri: String,
	mataPelajaran: String,
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
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
