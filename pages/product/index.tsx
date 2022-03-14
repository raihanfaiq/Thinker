import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
import Layout from '../../components/_layouts/ProductLayout';
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
										<Card>
											<Card.Content>
												<Card.Header>
													<Link href={`/product/${product._id}`}>
														<a>{product.name}</a>
													</Link>
													<p>{product.description}</p>
													<p>{product.price}</p>
													<p>{product.category}</p>
												</Card.Header>
											</Card.Content>
											<Card.Content extra>
												<Link href={`/product/${product._id}`}>
													<Button primary>View</Button>
												</Link>
												<Link href={`/product/${product._id}/edit`}>
													<Button primary>Edit</Button>
												</Link>
											</Card.Content>
										</Card>
									</div>
								);
							})}
						</div>
						<div className="flex-cc row gap-4 mt-4">
							<div className="p-2 w-36 mt-10 rounded-xl text-white bg-gradient-to-bl from-sky text-justify z-10">
								<a href="product/new">
									<h1 className="text-xl font-bold text-center z-10">Buat Produk</h1>
								</a>
							</div>
						</div>
					</div>
				</section>
			</MainLayout>
		</div>
	);
};

Index.getInitialProps = async () => {
	const res = await fetch('https://thinker-id.vercel.app/api/products');
	const { data } = await res.json();

	return { products: data };
};

export default Index;

//23 menit
