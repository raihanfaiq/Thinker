import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
import MainLayout from '@components/_layouts/MainLayout';

const Index = ({ products }) => {
	return (
		<div className="bg-sky">
			<MainLayout title="New Product">
				<section className="container">
					<div className="flex flex-cc col">
						<h1 className="text-4xl z-20 my-10 flex-cc text-white">My Cart</h1>
						<div className="grid grid-cols-3 gap-4 z-20">
							{products.map((product) => {
								return (
									<div key={product._id}>
										<Card className="rounded-md shadow-lg overflow-hidden sm:w-64 bg-white sm:mb-0 md:w-80 lg:w-72">
											<Card.Content>
												<Card.Header>
													<img
														src={product.image}
														alt="Image Caption"
														className="object-scale-down h-48 w-96"
													/>
													<div className="px-6 pt-2">
														<Link
															href={`/product/${product.productId}`}
														>
															<a>{product.name}</a>
														</Link>

														<div className="pt-5 flex row justify-between">
															<div className="text-xl">Price</div>
															<div className="text-xl">{product.price}</div>
														</div>
														<div className="pt-1 flex row justify-between">
															<div className="text-xl mt-2">Quantity</div>
															<div className="flex row">
																<Button class>+</Button>
																<div className="text-xl mt-2 mx-2">{product.quantity}</div>
																<Button>-</Button>
															</div>
														</div>
													</div>
												</Card.Header>
											</Card.Content>
										</Card>
									</div>
								);
							})}
						</div>
						<div className="flex-cc row gap-4 mt-4">
							<div className="p-2 w-36 mt-10 rounded-xl text-white bg-white text-justify z-10">
								<a href="">
									<h1 className="text-xl font-bold text-center z-10">
										Checkout
									</h1>
								</a>
							</div>
						</div>
					</div>
				</section>
			</MainLayout>
		</div>
	);
};

Index.getInitialProps = async ({ query: { email } }) => {
	const res = await fetch('http://localhost:3000/api/cart');
	const { data } = await res.json();
	let obj = data.find((o) => o.email === email);
	obj = obj.products;

	return { products: obj };
};
export default Index;
