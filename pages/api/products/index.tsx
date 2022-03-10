import dbConnect from '../../../utils/dbConnect';
import Product from '../../../models/Product';

dbConnect();

export default async (req, res) => {
	const { method } = req;
	switch (method) {
		case 'GET':
			try {
				const products = await Product.find({});
				res.status(200).json({ success: true, data: products });
			} catch (error) {
				res.status(400).json({ success: false, error: error.message });
			}
			break;

		case 'POST':
			try {
				const product = await Product.create(req.body);

				res.status(201).json({ success: true, data: product });
			} catch (error) {
				res.status(400).json({ success: false, error: error.message });
			}
			break;

		default:
			res.status(400).json({ success: false });
			break;
	}
};
