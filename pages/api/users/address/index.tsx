import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/User';

dbConnect();

const index = async (req, res) => {
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

		default:
			res.status(400).json({ success: false });
			break;
	}
};

export default index;
