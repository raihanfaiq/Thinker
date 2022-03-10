import mongoose from 'mongoose';
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
		enum: ['Video', 'PDF', 'Buku'],
		default: 'PDF',
	},
	price: Number,
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
