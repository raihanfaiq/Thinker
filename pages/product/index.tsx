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
						<h1 className="text-4xl z-20 my-10 flex-cc text-white">products</h1>
						<div className="grid grid-cols-3 gap-4 z-20">
							{products.map((product) => {
								return (
									<div key={product._id}>
										<Card className="rounded-md shadow-lg overflow-hidden sm:w-64 bg-white sm:mb-0 md:w-80 lg:w-72">
											<Card.Content>
												<Card.Header>
													<img
														src={product.linkGambar}
														alt="Image Caption"
														className="w-full"
													/>
													<div className="px-6 pt-4">
														<Link href={`/product/${product._id}`}>
															<a>{product.name}</a>
														</Link>
														<div>
															<img src="/icon/rating-star.svg" />
															<img src="/icon/rating-star.svg" />
															<img src="/icon/rating-star.svg" />
															<img src="/icon/rating-star.svg" />
															<img src="/icon/rating-star.svg" />
														</div>
														<div className="pt-6">{product.price}</div>
														<p>{product.category}</p>
													</div>
												</Card.Header>
											</Card.Content>
											<Card.Content extra>
												<Link href={`/product/${product._id}`}>
													<Button primary>View</Button>
												</Link>
												<Button primary>Add to Cart</Button>
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

Index.getInitialProps = async () => {
	const res = await fetch('http://localhost:3000/api/products');
	const { data } = await res.json();

	return { products: data };
};

export default Index;

//23 menit
