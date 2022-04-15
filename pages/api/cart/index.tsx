import { getSession, signIn, signOut, useSession } from 'next-auth/react';
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import Product from '../../../models/Product';

dbConnect();

const index = async (req, res) => {
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const users = await User.find({ });
				res.status(200).json({ success: true, data: users });
			} catch (error) {
				res.status(400).json({ success: false, error: error.message });
			}
			break;

		case 'POST':
			try {
				const user = await User.create(req.body);

				res.status(201).json({ success: true, data: user });
			} catch (error) {
				res.status(400).json({ success: false, error: error.message });
			}
			break;

		default:
			res.status(400).json({ success: false });
			break;
	}
};

export default index;