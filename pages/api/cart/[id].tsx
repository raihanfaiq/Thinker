/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import Product from '../../../models/Product';

dbConnect();

export default async (req, res) => {
	const {
		query: { id },
		method,
	} = req;
	const obj = JSON.parse(req.body);
	const Email = obj.userEmail;
	const quantity = obj.quantity;
	const image = obj.image;
	const price = obj.price;
	const name = obj.name;
	const category = obj.category;
	const kodeJenis = obj.kodeJenis;
	const kelas = obj.kelas;
	const jurusan = obj.jurusan;

	switch (method) {
		case 'PUT':
			try {
				let user = await User.findOne({ email: Email });
				console.log('add to cart', user);
				let product = await Product.findOne({ _id: id });
				//user exists for user
				let itemIndex = user.products.findIndex((p) => p.productId == id);

				if (itemIndex > -1) {
					//product exists in the user, update the quantity
					let productItem = user.products[itemIndex];
					productItem.quantity += 1;
					user.products[itemIndex] = productItem;
					await User.findByIdAndUpdate(user.id, user);
				} else {
					//product does not exists in user, add new item
					user.products.push({
						productId: id,
						quantity,
						image,
						price,
						name,
						category: category,
						kodeJenis: kodeJenis,
						kelas: kelas,
						jurusan: jurusan,
					});
					await User.findByIdAndUpdate(user.id, user);
				}
				return res.status(201).json({ success: true });
			} catch (err) {
				console.log(err);
				res.status(500).send('Something went wrong');
			}
	}
};
