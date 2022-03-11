import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
import Layout from '../../components/_layouts/ProductLayout';

const Index = ({ products }) => {
	return (
		<Layout>
			<div className="container">
				<h1>products</h1>
				<div className="grid grid-cols-3 gap-4">
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
		</Layout>
	);
};

Index.getInitialProps = async () => {
	const res = await fetch('http://localhost:3000/api/products');
	const { data } = await res.json();

	return { products: data };
};

export default Index;

//23 menit
