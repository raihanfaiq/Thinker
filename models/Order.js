import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
	orderId: String,
	status: String,
	products: [
		{
			productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
			image: String,
			price: Number,
			name: String,
			quantity: Number,
		},
	],
	email: String,
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
