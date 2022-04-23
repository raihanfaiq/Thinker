import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/User';
const jsonJarak = require('./jarak.json');
const jsonHarga = require('./harga.json');
dbConnect();

export default async (req, res) => {
	const {
		query: { email, id },
		method,
	} = req;
	// let KotaID;
	// async function getCitiiies() {
	// 	await RajaOngkir.getCities()
	// 		.then(function (result) {
	// 			KotaID = result;
	// 			console.log(KotaID);
	// 		})
	// 		.catch(function (error) {
	// 			console.log(error);
	// 		});
	// }
	// async function doStuff() {
	// 	KotaID = await getCitiiies;
	// }
	switch (method) {
		case 'GET':
			try {
				let user = await User.findOne({ email: email });
				console.log(user);
				let kotaUser = user.address.find((x) => x.id === id).kota.toLowerCase();

				let listJarak = jsonJarak.kota;
				// console.log(listJarak[0].nama);
				let jarak = listJarak.find((x) => x.nama === kotaUser).jarak;
				let biaya = jsonHarga;
				for (let i = 0; i < biaya.harga.length; i++) {
					biaya.harga[i].harga = biaya.harga[i].harga * jarak;
				}
				res.status(200).json({ success: true, data: biaya });
			} catch (error) {
				res.status(400).json({ success: false, error: error.message });
			}
			break;

		default:
			res.status(400).json({ success: false });
			break;
	}
};
