/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../../../utils/dbConnect';
import User from '../../../../../models/User';
import Product from '../../../../../models/Product';

dbConnect();

export default async (req, res) => {
	const {
		query: { email, id },
		method,
	} = req;

	switch (method) {
		case 'PUT':
			try {
				const user = await User.findOne({ email: email });
				// console.log(user);
				const itemIndex = user.address.findIndex((p) => p._id == id);
				console.log('itemIndex', itemIndex);
				if (itemIndex > -1) {
					//product exists in the user, update the quantity
					let addressItem = user.address[itemIndex];
					addressItem = req.body;
					user.address[itemIndex] = addressItem;
					await User.findByIdAndUpdate(user.id, user);
				}
				return res.status(201).json({ success: true, data: user });
			} catch (err) {
				console.log(err);
				res.status(500).send('Something went wrong', err);
			}
			break;

		default:
			res.status(400).json({ success: false });
			break;
	}
};
