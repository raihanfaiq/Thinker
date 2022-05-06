/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../utils/dbConnect';
import Order from '../../../models/Order';

dbConnect();

export default async (req, res) => {
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const orders = await Order.find({});
				res.status(200).json({ orders });
			} catch (error) {
				res.status(400).json({ success: false, error: error.message });
			}
			break;

		case 'POST':
			try {
				const order = await Order.create(req.body);

				res.status(201).json({ success: true, data: order });
			} catch (error) {
				res.status(400).json({ success: false, error: error.message });
			}
			break;

		default:
			res.status(400).json({ success: false });
			break;
	}
};
