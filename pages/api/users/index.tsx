/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

dbConnect();

export default async (req, res) => {
	const { method } = req;
	switch (method) {
		case 'GET':
			try {
				const users = await User.find({});
				res.status(200).json({ success: true, data: users });
			} catch (error) {
				res.status(400).json({ success: false, error: error.message });
			}
			break;

		case 'POST':
			try {
				const emailExist = await User.findOne({ email: req.body.email });
				if (emailExist) {
					return res.status(400).json({
						status: res.statusCode,
						message: 'Email Sudah digunakan !',
					});
				}
				const user = await User.create(req.body);

				res.status(201).json({ success: true, data: user });
			} catch (error) {
				res.status(400).json({ success: false, error: error.message });
			}
			break;
		
		case 'PUT':
			try {
				console.log('HAIAIIAI');
				const user = await User.findOne({ email: req.body.email });
				user.provider = req.body.provider;
				console.log(user);
				await User.findByIdAndUpdate(user.id, user);
				if (!user) {
					return res.status(400).json({ success: false });
				}
	
				res.status(200).json({ success: true, data: user });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;

		default:
			res.status(400).json({ success: false });
			break;
	}
};
