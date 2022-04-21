import dbConnect from '../../../../../utils/dbConnect';
import User from '../../../../../models/User';
import Product from '../../../../../models/Product';

dbConnect();

export default async (req, res) => {
	const {
		query: { email },
		method,
	} = req;

	switch (method) {
		case 'POST':
			try {
				let user = await User.findOne({ email: email });
				// console.log(product);
				if (user) {
					//user exists for user
					user.address.push(req.body);
					// if (itemIndex > -1) {
					// 	//product exists in the user, update the quantity
					// 	let productItem = user.products[itemIndex];
					// 	productItem.quantity += 1;
					// 	user.products[itemIndex] = productItem;
					// } else {
					// 	//product does not exists in user, add new item
					// 	user.products.push({ productId: id, quantity, image, price, name });
					// }
					user = await user.save();
					return res.status(201).send(user);
				} else {
				}
			} catch (err) {
				console.log(err);
				res.status(500).send('Something went wrong', err);
			}
		case 'GET':
			try {
				const users = await User.find({ email: email });
				console.log(users);
				res.status(200).json({ success: true, data: users });
			} catch (error) {
				res.status(400).json({ success: false, error: error.message });
			}
			break;

		default:
			res.status(400).json({ success: false });
			break;
	}
};
