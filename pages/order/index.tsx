import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
import MainLayout from '@components/_layouts/MainLayout';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Index = ({ orders }) => {
	const { data } = useSession();
	const [form, setForm] = useState({ order: {}, email: data?.user.email});
	const router = useRouter();

	const handleClick = async (order: any) => {
		const form = {
			orderId: order.orderID,
			status: 'Pesanan Telah Diterima',
			products: order.products,
		};
		try {
			const res = await fetch(`http://localhost:3000/api/orders/${order._id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(form),
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="bg-sky">
			<MainLayout title="New Product">
				<section className="container">
					<div className="flex flex-cc col">
						<div className="flex flex-col">
							<div className="flex flex-col items-center justify-center mt-8 z-20 w-full">
								<h1 className="text-center text-white mb-12">Pesanan Saya</h1>
								{/* <!-- User Card --> */}
								{orders.map((order, i) => (
									<div className="flex flex-col shadow-md w-[80rem] mb-4"  key={i}>
										{/* <!-- Body --> */}
										<div className="relative flex flex-col bg-white rounded-xl p-5">
											{/* <!-- Title --> */}
											<div className="flex-bs flex-row">
												<div className="flex flex-row">
													<div className="text-xl font-semibold text-gray-900 hover:underline truncate mb-2">
													Order ID
													</div>
													<div className="text-xl font-semibold text-gray-900 hover:underline truncate mb-2 ml-6">
													#{order.orderId}
													</div>
												</div>
												<div className="text-xl font-semibold text-gray-900 rounded-xl mb-2 mr-5 bg-orange-200 p-2">
													{order.status}
												</div>
											</div>
											{order.products.map((product, i) => (
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
																Rp. {new Intl.NumberFormat('en-US').format(product?.price)}
															</div>
														</div>
														{order.status === 'Pesanan Dikirim' && (
															<div className="text-xxs absolute right-10 cursor-pointer bg-gray-100 rounded-xl p-1" onClick={() => handleClick(order)}>
													            Telah menerima pesanan?
															</div>
														)}
														<div className="absolute right-10 mt-10">
															<div className="text-xl text-gray-900 truncate">
																x {product.quantity}
															</div>
														</div>
													</div>													
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</MainLayout>
		</div>
	);
};

Index.getInitialProps = async () => {
	const response = await fetch('http://localhost:3000/api/orders');
	const { orders } = await response.json();

	return { orders: orders };
};
export default Index;
