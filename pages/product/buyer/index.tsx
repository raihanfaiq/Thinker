import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
import Layout from '../../../components/_layouts/ProductLayout';
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
