import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import Product from '../../../models/Product';
import { MdOutlineThumbsUpDown } from 'react-icons/md';
dbConnect();

export default async (req, res) => {
	const {
		query: { id },
		method,
	} = req;
	const obj = JSON.parse(req.body);
	const Email = obj.userEmail;
	const quantity = obj.quantity;

	switch (method) {
		case 'POST':
			try {
				let user = await User.findOne({ email: Email });
				console.log(user);
				let product = await Product.findOne({ _id: id });
				// console.log(product);
				if (user) {
					//user exists for user
					let itemIndex = user.products.findIndex((p) => p.productId == id);

					if (itemIndex > -1) {
						//product exists in the user, update the quantity
						let productItem = user.products[itemIndex];
						productItem.quantity += 1;
						user.products[itemIndex] = productItem;
					} else {
						//product does not exists in user, add new item
						user.products.push({ productId: id, quantity });
					}
					user = await user.save();
					return res.status(201).send(user);
				} else {
					//no user for user, create new user
					const newUser = await User.create({
						email: Email,
						products: [{ productId: id, quantity }],
					});

					return res.status(201).send(newUser);
				}
			} catch (err) {
				console.log(err);
				res.status(500).send('Something went wrong');
			}
	}
};
