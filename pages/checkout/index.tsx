import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import fetch from 'isomorphic-unfetch';
import { Card } from 'semantic-ui-react';
import MainLayout from '@components/_layouts/MainLayout';

const Index = ({ products }) => {
	return (
		<div className="bg-sky">
			<MainLayout title="New Product">
				<section className="container">
					<div className="flex flex-cc col">
						<h1 className="text-4xl z-20 my-10 flex-cc text-white">products</h1>
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
													<div className="px-6 pt-4">
														<Link
															href={`/product/${product.productId}`}
														>
															<a>{product.name}</a>
														</Link>

														<div className="pt-6">{product.price}</div>
													</div>
												</Card.Header>
											</Card.Content>
										</Card>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			</MainLayout>
		</div>
	);
};

Index.getInitialProps = async (req) => {
	const res = await fetch('http://localhost:3000/api/cart');
	const { data } = await res.json();
	let obj = data.find((o) => o.email === 'quenttok@gmail.com');
	obj = obj.products;
	console.log(typeof obj);
	console.log(obj);

	return { products: obj };
};
export default Index;
