/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
import MainLayout from '@components/_layouts/MainLayout';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Index = ({ products, address }) => {
	const { data } = useSession();
	const router = useRouter();

	const indexUtama = address.findIndex((item) => item?.alamatUtama === true);
	const totalProduct = products.map((p) => p.price * p.quantity).reduce((a, b) => a + b, 0);

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
										<div className='m-1 p-5 rounded-xl bg-gray-100'>
											<div className="text-xl font-semibold text-red-500 hover:underline truncate">
												Alamat Pengiriman
											</div>
											<div className="flex flex-row">
												<div className="text-xl font-semibold text-gray-900 truncate">
													{address[indexUtama]?.namaLengkap}
												</div>
												<div className="text-xxs text-black truncate mt-1 ml-3">
													{address[indexUtama]?.alamatUtama ? '[Utama]' : ''}
												</div>
											</div>

											{/* <!-- Author - Category --> */}
											<div className="text-xxs text-gray-600 truncate mt-1">
												{address[indexUtama]?.noTelp}
											</div>
											<div className="text-xxs text-gray-600 truncate mt-1">
												{address[indexUtama]?.jalan} ({address[indexUtama]?.tandaiSebagai})
											</div>
											<div className="text-xxs text-gray-600 truncate mt-1">
												{address[indexUtama]?.kodePos} - {address[indexUtama]?.detailLain}
											</div>
										</div>
										<div className='relative m-1 p-5 rounded-xl bg-gray-100'>
											<div className="text-xl font-semibold text-black-500 hover:underline truncate mb-3">
												Pesanan Saya
											</div>
											{products.map((product, i) => (
												<div key={i}>
													<div className="flex flex-row">
														<div className="inline relative group h-24">
															{/* <!-- Thumbnail --> */}
															<img
																className="rounded-t object-cover h-full w-full"
																src={product.image}
																alt="Product Preview"
															/>
														</div>
														<div className="flex flex-col ml-4 mt-4">
															<div className="text-xl text-gray-900 truncate">
																{product.name}
															</div>
															<div className="text-xl text-gray-900 truncate">
																Rp. {product.price}
															</div>
														</div>
														<div className="absolute right-10 mt-10">
															<div className="text-xl text-gray-900 truncate">
																x {product.quantity}
															</div>
														</div>
													</div>

													{/* <!-- Author - Category --> */}
													
												</div>
											))}
										</div>
										<div className='m-1 p-5 rounded-xl bg-gray-100'>
											<div className="mb-2 text-xl font-semibold hover:underline truncate">
												Kategori
											</div>
											<div className="text-xl text-gray-900 truncate">
												Hard Copy
											</div>
										</div>
										<div className='m-1 p-5 rounded-xl bg-gray-100'>
											<div className='flex-bs flex-row'>
												<div className="mb-2 text-xl font-semibold hover:underline truncate">
													Opsi Pengiriman
												</div>
												<div className="cursor-pointer hover:-translate-y-1 duration-300" >
													<Link href={`/checkout/${data?.user.email}/${address[indexUtama]._id}/provider`}>
														<Button>Pilih Provider</Button>
													</Link>
												</div>
											</div>
											<div className="text-xl text-gray-900 truncate">
												JNE
											</div>
										</div>
										<div className='m-1 p-5 rounded-xl bg-gray-100'>
											<div className="mb-2 text-xl font-semibold hover:underline truncate">
												Pembayaran
											</div>
											<div className='flex flex-row flex-bs mb-1'>
												<div className="text-xl text-gray-900 truncate">
													Metode Pembayaran
												</div>
												<div className="text-xl text-gray-900 truncate">
													Transfer Bank
												</div>
											</div>
											<div className='flex flex-row flex-bs mb-1'>
												<div className="text-xl text-gray-900 truncate">
													Subtotal Produk
												</div>
												<div className="text-xl text-gray-900 truncate">
													Rp. {totalProduct}
												</div>
											</div>
											<div className='flex flex-row flex-bs mb-1'>
												<div className="text-xl text-gray-900 truncate">
													Subtotal Pengiriman
												</div>
												<div className="text-xl text-gray-900 truncate">
													Rp. 10.000
												</div>
											</div>
											<div className='flex flex-row flex-bs mb-1'>
												<div className="text-xl text-gray-900 truncate">
													Total Pembayaran
												</div>
												<div className="text-xl text-gray-900 truncate">
													Rp. 10.000
												</div>
											</div>
										</div>
										<div className='m-1 p-5 rounded-xl bg-gray-100'>
											<div className='flex flex-row flex-bs mb-1'>
												<div>
													<div className="text-xl text-gray-900 truncate">
														Total Pembayaran
													</div>
													<div className="text-xl text-red-500 truncate">
														Rp. 10.000
													</div>
												</div>
												<div className="cursor-pointer hover:-translate-y-1 duration-300 mt-2" >
													<Link href={'/checkout/new'}>
														<Button primary>Bayar</Button>
													</Link>
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
	obj = obj.products;

	return { products: obj, address: address };
};
export default Index;
