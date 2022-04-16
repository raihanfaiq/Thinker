import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/User';
import Product from '../../../../models/Product';

dbConnect();

const increment = async (req, res) => {
	const { method } = req;
	const obj = JSON.parse(req.body);
	const userEmail = obj.userEmail;
	const productId = obj.productId;

	switch (method) {
		case 'PUT':
			try {
				let user = await User.findOne({ email: userEmail });
				// let product = await Product.findOne({ _id: id });
				// user exists for user
				let itemIndex = user.products.findIndex((p) => p.productId == productId);

				if (itemIndex > -1) {
					//product exists in the user, update the quantity

					user.products.splice(itemIndex, 1);
					await User.findByIdAndUpdate(user.id, user);
				} else {
					//product does not exists in user, add new item
					// user.products.push({ productId: id, quantity, image, price, name });
					// await User.findByIdAndUpdate(user.id, user);
				}
				return res.status(201).json({ success: true });
			} catch (err) {
				console.log(err);
				res.status(500).send('Something went wrong');
			}

		default:
			res.status(400).json({ success: false });
			break;
	}
};

export default increment;
