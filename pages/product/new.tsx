import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { ProductType } from '../../@types/product';
import MainLayout from '@components/_layouts/MainLayout';

const NewProduct = () => {
	const [form, setForm] = useState({ name: '', description: '', category: '', price: 0 });
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState<ProductType>({ name: '', description: '', category: '', price: 0 });
	const router = useRouter();

	useEffect(() => {
		if (isSubmitting) {
			console.log('errors', errors);
			if (Object.keys(errors).length === 0) {
				console.log(form);
				createProduct();
			} else {
				setIsSubmitting(false);
			}
		}
	}, [errors]);

	const createProduct = async () => {
		try {
			const res = await fetch('http://localhost:3000/api/products', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(form),
			});
			router.push('/product');
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const errs = validate();
		setErrors(errs);
		setIsSubmitting(true);
	};

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeCategory = (category: string) => {
		setForm({
			...form,
			category: category,
		});
	};

	const validate = () => {
		const err: ProductType = {};

		if (!form.name) {
			err.name = 'Name is required';
		}
		if (!form.description) {
			err.description = 'Description is required';
		}
		if (!form.price) {
			err.price = 'Price is required';
		}

		return err;
	};

	return (
		<div className="bg-sky">
			<MainLayout title="New Product">
				<section className="container">
					<div className="flex flex-cc col">
						{isSubmitting ? (
							<Loader active inline="centered" size='massive'>Loading</Loader>
						) : (
							<div className="z-20 w-1/2 bg-gradient-to-bl from-sky shadow-2xl p-10 rounded-2xl mt-10">
								<h1 className="text-4xl z-20 my-10 flex-cc">Create Product</h1>
								<Form onSubmit={handleSubmit}>
									<h3>Name</h3>
									<Form.Input
										fluid
										error={
											errors.name
												? { content: 'Please enter a name', pointing: 'below' }
												: null
										}
										placeholder="Name"
										name="name"
										value={form.name}
										onChange={handleChange}									
									/>
									<h3>Description</h3>
									<Form.TextArea
										fluid
										placeholder="Description"
										name="description"
										error={
											errors.description
												? { content: 'Please enter a description', pointing: 'below' }
												: null
										}
										value={form.description}
										onChange={handleChange}
									/>
									<h3>Category</h3>
									<Form.Radio
										label="PDF"
										name="pdf"
										value={form.category}
										onChange={(e) => handleChangeCategory('PDF')}
									/>
									<Form.Radio
										label="Buku"
										name="buku"
										value={form.category}
										onChange={(e) => handleChangeCategory('Buku')}
									/>
									<Form.Radio
										label="Video"
										name="video"
										value={form.category}
										onChange={(e) => handleChangeCategory('Video')}
									/>
									<h3>Price</h3>
									<Form.Input
										error={
											errors.price
												? { content: 'Please enter a price', pointing: 'below' }
												: null
										}
										placeholder="Price"
										name="price"
										value={form.price}
										onChange={handleChange}
									/>
									<div className="">
										<Button basic color="blue" type="submit">Create</Button>
									</div>
								</Form>
							</div>
						)}
					</div>
				</section>
			</MainLayout>
		</div>
	);
};

export default NewProduct;
