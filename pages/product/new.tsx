import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';

const NewProduct = () => {
	const [form, setForm] = useState({ name: '', description: '', category: '', price: '' });
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState({});
	const router = useRouter();

	useEffect(() => {
		if (isSubmitting) {
			if (Object.keys(errors).length === 0) {
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
		let errs = validate();
		setErrors(errs);
		setIsSubmitting(true);
	};

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const validate = () => {
		let err = {};

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
		<div className="container">
			<h1>Create Product</h1>
			<div>
				{isSubmitting ? (
					<Loader active inline="centered" />
				) : (
					<Form onSubmit={handleSubmit}>
						<Form.Input
							fluid
							error={
								errors.name
									? { content: 'Please enter a name', pointing: 'below' }
									: null
							}
							label="Name"
							placeholder="Name"
							name="name"
							onChange={handleChange}
						/>
						<Form.TextArea
							fluid
							label="Descriprtion"
							placeholder="Description"
							name="description"
							error={
								errors.description
									? { content: 'Please enter a description', pointing: 'below' }
									: null
							}
							onChange={handleChange}
						/>
						<Form.Input
							label="Category"
							placeholder="Category"
							name="category"
							value={form.category}
							onChange={handleChange}
						/>
						<Form.Input
							error={
								errors.price
									? { content: 'Please enter a price', pointing: 'below' }
									: null
							}
							label="Price"
							placeholder="Price"
							name="price"
							value={form.price}
							onChange={handleChange}
						/>
						<Button type="submit">Create</Button>
					</Form>
				)}
			</div>
		</div>
	);
};

export default NewProduct;
