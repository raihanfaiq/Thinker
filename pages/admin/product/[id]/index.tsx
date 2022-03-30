import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';
import MainLayout from '@components/_layouts/MainLayout';
import CartOutline from 'mdi-react/CartOutlineIcon';
import Star from 'mdi-react/StarIcon';

// <!-- MDI Icons -->s
<link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css" />;

const Product = ({ product }) => {
	const [confirm, setConfirm] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (isDeleting) {
			deleteProduct();
		}
	}, [isDeleting]);

	const open = () => setConfirm(true);

	const close = () => setConfirm(false);

	const deleteProduct = async () => {
		const productId = router.query.id;
		try {
			const deleted = await fetch(`http://localhost:3000/api/products/${productId}`, {
				method: 'Delete',
			});

			router.push('/admin/product');
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async () => {
		setIsDeleting(true);
		close();
	};

	return (
		<div className="bg-sky">
			<MainLayout title="New Product">
				<section className="container">
					<div className="flex flex-cc col">
						{isDeleting ? (
							<Loader active inline="centered" size="massive">
								Loading
							</Loader>
						) : (
							// <div className="z-20 w-1/2 bg-gradient-to-bl from-sky shadow-2xl p-10 rounded-2xl mt-10">
							// 	<h1 className="text-4xl z-20 mt-10 flex-cc">{product.name}</h1>
							// 	<p className="flex-cc my-10 mb-10">{product.description}</p>
							// 	<p className="flex-ss">{product.kelas}</p>
							// 	<p className="flex-ss">{product.price}</p>
							// 	<p className="flex-ss">{product.kelas}</p>
							// 	<p className="flex-ss">{product.kodeJenis}</p>
							// 	<p className="flex-ss">{product.kodeMateri}</p>
							// 	<p className="flex-ss">{product.mataPelajaran}</p>
							// 	<p className="flex-ss">{product.penilaian}</p>
							// 	{/* <p className="flex-ss">{product.rating}</p> */}
							// 	<p className="flex-ss">{product.stok}</p>
							// 	{/* <p className="flex-ss">{product.diskon}</p> */}
							// </div>
							// <!-- Product Card Container -->
							<div className="flex flex-col">
								<div className="flex flex-col items-center justify-center mt-32 z-20 w-full">
									{/* <!-- Product Card --> */}
									<div className="flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">
										

										{/* <!-- Body --> */}
										<div className="flex flex-col bg-white rounded-b p-3">
											{/* <!-- Title --> */}
											<div className="text-xl font-semibold text-gray-900 hover:underline truncate">
												{product.name}
											</div>

											{/* <!-- Author - Category --> */}
											<div className="text-xxs text-gray-600 truncate mt-1 mb-3">
												Mata Pelajaran

												{/* <!-- Author --> */}
												<a className="font-semibold hover:underline"> {product.mataPelajaran} </a>

												Kelas
												{/* <!-- Category --> */}
												<a className="font-semibold hover:underline"> {product.kelas} </a>
											</div>
											{/* <!-- Preview --> */}
											<div className="inline relative group h-48">
												{/* <!-- Thumbnail --> */}
												<img className="absolute rounded-t object-cover h-full w-full"
													src={product.linkGambar}
													alt="Product Preview" />
											</div>

											{/* <!-- Button Column --> */}
											<div className="flex flex-row flex-auto justify-end">
												{/* <!-- Cart Button --> */}
												<a className="flex text-xs px-3 my-auto py-2 mr-2
														rounded-xss transition-all duration-200">
														
													{/* <!-- Price --> */}
													<div className="text-sm text-gray-600 font-bold mt-4 mb-1">
														{product.price}
													</div>
														
												</a>
											</div>

											{/* <!-- Body --> */}
											<div className="flex flex-row mt-2">
												{/* <!-- Detail Column --> */}
												<div className="flex flex-col flex-auto">
													{/* <!-- Rating --> */}
													<div className="flex flex-row group">
														<i className="mdi mdi-star text-xs text-amber-400 
															hover:text-amber-500 transition-all duration-200"
														title="Worst"><Star /></i>

														<i className="mdi mdi-star text-xs text-amber-400 
															hover:text-amber-500 transition-all duration-200"
														title="Bad"><Star /></i>

														<i className="mdi mdi-star text-xs text-amber-400 
															hover:text-amber-500 transition-all duration-200"
														title="Not Bad"><Star /></i>

														<i className="mdi mdi-star text-xs text-amber-400 
															hover:text-amber-500 transition-all duration-200" 
														title="Good"><Star /></i>

														<i className="mdi mdi-star text-xs text-amber-400 
															hover:text-amber-500 transition-all duration-200"
														title="Awesome"><Star /></i>

														<div className="text-xxs text-gray-400 ml-1 hover:underline">
															{product.penilaian}
														</div>
													</div>

													{/* <!-- Statistic --> */}
													<div className="text-xxs text-gray-400 mt-1" title="34k Downlaods in this year">
														Terjual: {product.terjual}
													</div>
												</div>

												{/* <!-- Button Column --> */}
												<div className="flex flex-row flex-auto justify-end">
													{/* <!-- Cart Button --> */}
													<a className="flex text-xs border px-3 my-auto py-2 mr-2
														border-amber-500 group hover:bg-amber-500 
														rounded-xss
														transition-all duration-200">
														
														{/* <!-- Icon --> */}
														<i className="mdi mdi-cart-outline text-amber-700
															group-hover:text-white delay-100">
															<CartOutline />
														</i>
														
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="flex flex-col items-center justify-center mt-6 z-20 w-full">
									{/* <!-- Product Card --> */}
									<div className="flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">

										{/* <!-- Body --> */}
										<div className="flex flex-col bg-white rounded-b p-3">
											{/* <!-- Title --> */}
											<div className="text-xl font-semibold text-gray-900 underline truncate">
												Rincian Produk
											</div>

											{/* <!-- Title --> */}
											<div className="text-sm font-semibold text-gray-900 hover:underline truncate mt-4">
												Nama Produk: {product.name}
											</div>

											<div className="text-sm font-semibold text-gray-900 hover:underline truncate mt-4">
												Mata Pelajaran: {product.mataPelajaran}
											</div>

											<div className="text-sm font-semibold text-gray-900 hover:underline truncate mt-4">
												Kelas: kelas {product.kelas}
											</div>

											<div className="text-sm font-semibold text-gray-900 hover:underline truncate mt-4">
												Jenis: {product.kodeJenis}
											</div>

											<div className="text-sm font-semibold text-gray-900 hover:underline truncate mt-4">
												Kategori: {product.category}
											</div>

											<div className="text-sm font-semibold text-gray-900 hover:underline truncate mt-4">
												Stok: {product.stok}
											</div>
										</div>
										{/* <!-- Body --> */}
										<div className="flex flex-col bg-white rounded-b p-3">
											{/* <!-- Title --> */}
											<div className="text-xl font-semibold text-gray-900 underline truncate">
												Deskripsi Produk
											</div>
											<div className="text-sm text-gray-900 hover:underline mt-4">
												{product.description}
											</div>
										</div>
									</div>
								</div>
								<Button color="red" onClick={open}>
									Delete
								</Button>
							</div>
						)}
					</div>
				</section>
			</MainLayout>
			<Confirm open={confirm} onCancel={close} onConfirm={handleDelete} />
		</div>
	);
};

Product.getInitialProps = async ({ query: { id } }) => {
	const res = await fetch(`http://localhost:3000/api/products/${id}`);
	const { data } = await res.json();

	return { product: data };
};

export default Product;
