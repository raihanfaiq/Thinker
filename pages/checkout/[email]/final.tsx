/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
import MainLayout from '@components/_layouts/MainLayout';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
	PayPalScriptProvider,
	PayPalButtons,
	usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = ({ products, address, provider, hardcopy, softcopy, konsultasi, email }) => {
	const { data } = useSession();
	const router = useRouter();

	const indexUtama = address.findIndex((item) => item?.alamatUtama === true);
	const totalProduct = products.map((p) => p.price * p.quantity).reduce((a, b) => a + b, 0);
	let amount = Math.round((provider?.harga + totalProduct) / 14477);
	if (hardcopy && !(softcopy || konsultasi)) {
		amount = Math.round((provider?.harga + totalProduct) / 14477);
	} else if (!hardcopy && (softcopy || konsultasi)) {
		amount = Math.round((1000 + totalProduct) / 14477);
	} else if (!hardcopy && !(softcopy || konsultasi)) {
		amount = Math.round((1000 + totalProduct) / 14477);
	}

	// This values are the props in the UI
	// const amount = 2;
	const currency = 'USD';
	const style = { layout: 'vertical' };

	// Custom component to wrap the PayPalButtons and handle currency changes
	const ButtonWrapper = ({ currency, showSpinner }) => {
		// usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
		// This is the main reason to wrap the PayPalButtons in a new component
		const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

		useEffect(() => {
			dispatch({
				type: 'resetOptions',
				value: {
					...options,
					currency: currency,
				},
			});
		}, [currency, showSpinner]);

		return (
			<>
				{showSpinner && isPending && <div className="spinner" />}
				<PayPalButtons
					style={{ layout: 'horizontal' }}
					disabled={false}
					forceReRender={[amount, currency, style]}
					fundingSource={undefined}
					createOrder={(data, actions) => {
						return actions.order
							.create({
								purchase_units: [
									{
										amount: {
											currency_code: currency,
											value: amount,
										},
									},
								],
							})
							.then(async (orderId) => {
								// Your code here after create the order
								const form = {
									orderId: orderId,
									status: 'Belum Dibayar',
									products: products,
									email: email,
								};
								console.log('order created', form);

								try {
									const res = await fetch('http://localhost:3000/api/orders', {
										method: 'POST',
										headers: {
											Accept: 'application/json',
											'Content-Type': 'application/json',
										},
										body: JSON.stringify(form),
									});
								} catch (error) {
									console.log(error);
								}
								return orderId;
							});
					}}
					onApprove={function (data, actions) {
						return actions.order.capture().then(async function () {
							// Your code here after capture the order
							const form = {
								orderId: data.orderID,
								status: 'Pesanan Diproses',
								products: products,
							};
							try {
								const response = await fetch('http://localhost:3000/api/orders');
								const { orders } = await response.json();
								const orderId = orders.find(
									(order) => order.orderId === data.orderID
								)?._id;
								console.log(orderId);
								const res = await fetch(
									`http://localhost:3000/api/orders/${orderId}`,
									{
										method: 'PUT',
										headers: {
											Accept: 'application/json',
											'Content-Type': 'application/json',
										},
										body: JSON.stringify(form),
									}
								);
								router.push(`/order/${email}`);
							} catch (error) {
								console.log(error);
							}
							console.log('order captured', data);
						});
					}}
				/>
			</>
		);
	};

	return (
		<div className="bg-sky">
			<MainLayout title="New Product">
				<section className="container">
					<div className="flex flex-cc col">
						<div className="flex flex-col">
							<div className="flex flex-col items-center justify-center mt-10 z-20 w-full">
								{/* <!-- User Card --> */}
								<div className="flex flex-col shadow-md cursor-pointer w-[60rem] hover:-translate-y-1 duration-300 mb-8">
									{/* <!-- Body --> */}
									<div className="flex flex-col bg-white rounded-xl p-5">
										<h2 className="text-center text-black">Checkout</h2>
										{/* <!-- Title --> */}
										<div className="m-1 p-5 rounded-xl bg-gray-100">
											<div className="text-xl font-semibold text-red-500 hover:underline truncate">
												Alamat Pengiriman
											</div>
											<div className="flex flex-row">
												<div className="text-xl font-semibold text-gray-900 truncate">
													{address[indexUtama]?.namaLengkap}
												</div>
												<div className="text-xxs text-black truncate mt-1 ml-3">
													{address[indexUtama]?.alamatUtama
														? '[Utama]'
														: ''}
												</div>
											</div>

											{/* <!-- Author - Category --> */}
											<div className="text-xxs text-gray-600 truncate mt-1">
												{address[indexUtama]?.noTelp}
											</div>
											<div className="text-xxs text-gray-600 truncate mt-1">
												{address[indexUtama]?.email}
											</div>
											<div className="text-xxs text-gray-600 truncate mt-1">
												{address[indexUtama]?.jalan} (
												{address[indexUtama]?.tandaiSebagai})
											</div>
											<div className="text-xxs text-gray-600 truncate mt-1">
												{address[indexUtama]?.kodePos} -{' '}
												{address[indexUtama]?.detailLain}
											</div>
										</div>
										<div className="relative m-1 p-5 rounded-xl bg-gray-100">
											<div className="text-xl font-semibold text-black-500 hover:underline truncate mb-3">
												Pesanan Saya
											</div>
											{products.map((product, i) => (
												<div key={i}>
													<div className="flex flex-row">
														<div className="inline relative group h-24">
															{/* <!-- Thumbnail --> */}
															<img
																className="object-scale-down h-24 w-48"
																src={product.image}
																alt="Product Preview"
															/>
														</div>
														<div className="flex flex-col ml-4 mt-4">
															<div className="text-xl text-gray-900 truncate">
																{product.category} {product.name}
															</div>
															<div className="text-xl text-gray-900 truncate">
																{product.kodeJenis === 'J01' && (
																	<p>
																		Materi Pelajaran{' '}
																		{product.kelas > 1 && (
																			<a>{product.kelas}</a>
																		)}{' '}
																		{product.jurusan !==
																			'semua' && (
																			<a>{product.jurusan}</a>
																		)}
																	</p>
																)}
																{product.kodeJenis === 'J02' && (
																	<p>
																		Kumpulan Soal{' '}
																		{product.kelas > 1 && (
																			<a>{product.kelas}</a>
																		)}{' '}
																		{product.jurusan !==
																			'semua' && (
																			<a>{product.jurusan}</a>
																		)}
																	</p>
																)}
																{product.kodeJenis === 'J03' && (
																	<p>
																		Konsultasi{' '}
																		{product.kelas > 1 && (
																			<a>{product.kelas}</a>
																		)}{' '}
																		{product.jurusan !==
																			'semua' && (
																			<a>{product.jurusan}</a>
																		)}
																	</p>
																)}
															</div>
															<div className="text-xl text-gray-900 truncate">
																Rp
																{product.price
																	.toString()
																	.replace(
																		/\B(?=(\d{3})+(?!\d))/g,
																		'.'
																	)}
																,00
															</div>
														</div>
														<div className="absolute right-10 mt-10">
															<div className="text-xl text-gray-900 truncate">
																x {product.quantity}
															</div>
														</div>
													</div>
												</div>
											))}
										</div>
										<div className="m-1 p-5 rounded-xl bg-gray-100">
											{hardcopy && (
												<div className="flex-bs flex-row">
													<div className="mb-2 text-xl font-semibold hover:underline truncate">
														Opsi Pengiriman Hardcopy
													</div>
													<div className="cursor-pointer hover:-translate-y-1 duration-300">
														<Link
															href={`/checkout/${data?.user.email}/${address[indexUtama]._id}/provider`}
														>
															<Button>Pilih Provider</Button>
														</Link>
													</div>
												</div>
											)}

											{hardcopy && !provider ? (
												<div className="text-xl text-gray-500 truncate">
													Silakan Pilih Provider
												</div>
											) : (
												<div className="flex row flex-bs mt-3">
													<div className="text-xl truncate">
														{provider?.nama} - {provider?.layanan}
													</div>
													<div className="text-xl truncate">
														Rp
														{new Intl.NumberFormat('en-US').format(
															provider?.harga
														)}
													</div>
												</div>
											)}
										</div>
										<div className="m-1 p-5 rounded-xl bg-gray-100">
											{(softcopy || konsultasi) && (
												<div className="flex-bs flex-row">
													<div className="mb-2 text-xl font-semibold hover:underline truncate">
														Pengiriman Softcopy
													</div>
												</div>
											)}
											{(softcopy || konsultasi) && (
												<div className="flex row flex-bs mt-3">
													<div className="text-xl truncate">
														{address[indexUtama]?.email}
													</div>
													<div className="text-xl truncate">Rp1,000</div>
												</div>
											)}
										</div>
										<div className="m-1 p-5 rounded-xl bg-gray-100">
											<div className="mb-2 text-xl font-semibold hover:underline truncate">
												Pembayaran
											</div>
											<div className="flex flex-row flex-bs mb-1">
												<div className="text-xl text-gray-900 truncate">
													Metode Pembayaran
												</div>
												<div className="text-xl text-gray-900 truncate">
													Transfer Bank
												</div>
											</div>
											<div className="flex flex-row flex-bs mb-1">
												<div className="text-xl text-gray-900 truncate">
													Subtotal Produk
												</div>
												<div className="text-xl text-gray-900 truncate">
													Rp
													{new Intl.NumberFormat('en-US').format(
														totalProduct
													)}
												</div>
											</div>
											<div className="flex flex-row flex-bs mb-1">
												<div className="text-xl text-gray-900 truncate">
													Subtotal Pengiriman
												</div>
												<div className="text-xl text-gray-900 truncate">
													Rp
													{(softcopy || konsultasi) &&
														hardcopy &&
														new Intl.NumberFormat('en-US').format(
															provider?.harga + 1000
														)}
													{!(softcopy || konsultasi) &&
														hardcopy &&
														new Intl.NumberFormat('en-US').format(
															provider?.harga
														)}
													{(softcopy || konsultasi) &&
														!hardcopy &&
														new Intl.NumberFormat('en-US').format(1000)}
												</div>
											</div>
											<div className="flex flex-row flex-bs mb-1">
												<div className="text-xl text-gray-900 truncate">
													Total Pembayaran
												</div>
												<div className="text-xl text-gray-900 truncate">
													{/* Rp
													{new Intl.NumberFormat('en-US').format(
														provider?.harga + totalProduct
													)} */}
													Rp
													{(softcopy || konsultasi) &&
														hardcopy &&
														new Intl.NumberFormat('en-US').format(
															provider?.harga + totalProduct + 1000
														)}
													{!(softcopy || konsultasi) &&
														hardcopy &&
														new Intl.NumberFormat('en-US').format(
															provider?.harga + totalProduct
														)}
													{(softcopy || konsultasi) &&
														!hardcopy &&
														new Intl.NumberFormat('en-US').format(
															totalProduct + 1000
														)}
												</div>
											</div>
										</div>
										<div className="m-1 p-5 rounded-xl bg-gray-100">
											<div className="flex flex-row flex-bs mb-1">
												<div>
													<div className="text-xl text-gray-900 truncate">
														Total Pembayaran
													</div>
													<div className="text-xl text-red-500 truncate">
														{(softcopy || konsultasi) &&
															hardcopy &&
															new Intl.NumberFormat('en-US', {
																style: 'currency',
																currency: 'IDR',
															}).format(
																provider?.harga +
																	totalProduct +
																	1000
															)}
														{!(softcopy || konsultasi) &&
															hardcopy &&
															new Intl.NumberFormat('en-US', {
																style: 'currency',
																currency: 'IDR',
															}).format(
																provider?.harga + totalProduct
															)}
														{(softcopy || konsultasi) &&
															!hardcopy &&
															new Intl.NumberFormat('en-US', {
																style: 'currency',
																currency: 'IDR',
															}).format(1000 + totalProduct)}
													</div>
												</div>
												<div className="cursor-pointer hover:-translate-y-1 duration-300 mt-2">
													<PayPalScriptProvider
														options={{
															'client-id':
																'ARZpwYsgjRLQTsLPcJmOX1tdaf4CDWhQMqSdXTQ_LwXh8GoTakfM6_271JeaDzp9gQywFahsoS3FK0qJ',
														}}
													>
														<ButtonWrapper
															currency={currency}
															showSpinner={false}
														/>
													</PayPalScriptProvider>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</MainLayout>
		</div>
	);
};

Index.getInitialProps = async ({ query: { email } }) => {
	const res = await fetch('http://localhost:3000/api/users/address');
	const { data } = await res.json();
	let obj = data.find((o) => o.email === email);
	const address = obj.address;
	const prov = obj.provider;
	obj = obj.products;
	let softcopy = false;
	if (obj.some((e) => e.category === 'Softcopy')) {
		softcopy = true;
	}
	let hardcopy = false;
	if (obj.some((e) => e.category === 'Hardcopy')) {
		hardcopy = true;
	}
	let konsultasi = false;
	if (obj.some((e) => e.category === 'Konsultasi')) {
		konsultasi = true;
	}
	console.log('softcopy ', softcopy, ' hardcopy ', hardcopy, ' konsultasi ', konsultasi);

	return {
		products: obj,
		address: address,
		provider: prov,
		softcopy: softcopy,
		hardcopy: hardcopy,
		konsultasi: konsultasi,
		email: email,
	};
};
export default Index;
