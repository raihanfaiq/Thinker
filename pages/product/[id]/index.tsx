import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';
import MainLayout from '@components/_layouts/MainLayout';

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
			const deleted = await fetch(`https://thinker-id.vercel.app/api/products/${productId}`, {
				method: 'Delete',
			});

			router.push('/product');
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
							<div className="z-20 w-1/2 bg-gradient-to-bl from-sky shadow-2xl p-10 rounded-2xl mt-10">
								<h1 className="text-4xl z-20 mt-10 flex-cc">{product.name}</h1>
								<p className="flex-cs">{product.price}</p>
								<p className="flex-cc my-10 mb-10">{product.description}</p>
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
	const res = await fetch(`https://thinker-id.vercel.app/api/products/${id}`);
	const { data } = await res.json();

	return { product: data };
};

export default Product;
