import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/User';
import Product from '../../../../models/Product';
import fetch from 'isomorphic-unfetch';
import request from 'request';

dbConnect();

export default async (req, res) => {
	const {
		query: { email },
		method,
	} = req;

	switch (method) {
		case 'GET':
			try {
				let user = await User.findOne({ email: email });
				console.log(user);

				// var options = {
				// 	method: 'POST',
				// 	url: 'https://api.rajaongkir.com/starter/cost',
				// 	headers: {
				// 		key: 'your-api-key',
				// 		'content-type': 'application/x-www-form-urlencoded',
				// 	},
				// 	form: { origin: '501', destination: '114', weight: 1700, courier: 'jne' },
				// };

				// request(options, function (error, response, body) {
				// 	if (error) throw new Error(error);

				// 	console.log(body);
				// });

				res.status(200).json({ success: true });
			} catch (error) {
				res.status(400).json({ success: false, error: error.message });
			}
			break;

		default:
			res.status(400).json({ success: false });
			break;
	}
};
