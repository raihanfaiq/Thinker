/* eslint-disable import/no-anonymous-default-export */
import dbConnect from '../../../../utils/dbConnect';
import User from '../../../../models/User';
import jsonJarak from './jarak.json';
import jsonHarga from './harga.json';
dbConnect();

export default async (req: { query: { email: any; id: any; }; method: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; data?: any; error?: any; }): void; new(): any; }; }; }) => {
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
				const user = await User.findOne({ email: email });
				// console.log(user);
				const kotaUser = user.address.find((x: { id: any; }) => x.id === id).kota.toLowerCase();

				const listJarak = jsonJarak.kota;
				// console.log(listJarak[0].nama);
				const jarak = listJarak.find((x: { nama: any; }) => x.nama === kotaUser).jarak;
				const biaya = jsonHarga;
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
