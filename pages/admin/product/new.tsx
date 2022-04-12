/* eslint-disable no-mixed-spaces-and-tabs */
import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { ProductType } from '../../../@types/product';
import MainLayout from '@components/_layouts/MainLayout';

const NewProduct = () => {
	const [form, setForm] = useState({
		name: '',
		description: '',
		category: 'Softcopy',
		price: 0,
		diskon: 0,
		kelas: 0,
		kodeJenis: '',
		kodeMateri: '',
		linkGambar: '',
		mataPelajaran: '',
		penilaian: 0,
		rating: 0,
		stok: 0,
		terjual: 0,
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState<ProductType>({
		name: '',
		description: '',
		category: '',
		price: 0,
		diskon: 0,
		kelas: 0,
		kodeJenis: '',
		kodeMateri: '',
		mataPelajaran: '',
		penilaian: 0,
		rating: 0,
		stok: 0,
		terjual: 0,
	});
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
			router.push('/admin/product');
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const Form = e.currentTarget;
		const fileInput = Array.from(Form.elements).find(({ name }) => name === 'file');

		const formData = new FormData();

		for (const file of fileInput.files) {
			formData.append('file', file);
		}

		formData.append('upload_preset', 'thinker');

		const data = await fetch('https://api.cloudinary.com/v1_1/cloud51/image/upload', {
			method: 'POST',
			body: formData,
		}).then((r) => r.json());

		console.log('link gambar', data.secure_url);
		setForm({
			...form,
			linkGambar: data.secure_url,
		});

		const errs = validate();
		setErrors(errs);
		setIsSubmitting(false);
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
		// if (!form.price) {
		// 	err.price = 'Price is required';
		// }
		// if (!form.kelas) {
		// 	err.kelas = 'kelas is required';
		// }
		// if (!form.kodeJenis) {
		// 	err.kodeJenis = 'kodeJenis is required';
		// }
		// if (!form.kodeMateri) {
		// 	err.kodeMateri = 'kodeMateri is required';
		// }
		// if (!form.mataPelajaran) {
		// 	err.mataPelajaran = 'mataPelajaran is required';
		// }
		// if (!form.penilaian) {
		// 	err.penilaian = 'penilaian is required';
		// }
		// if (!form.stok) {
		// 	err.stok = 'stok is required';
		// }

		return err;
	};

	return (
		<div className="bg-sky">
			<MainLayout title="New Product">
				<section className="container">
					<div className="flex flex-cc col">
						{isSubmitting ? (
							<Loader active inline="centered" size="massive">
								Loading
							</Loader>
						) : (
							<div className="z-20 w-1/2 bg-gradient-to-bl from-sky shadow-2xl p-10 rounded-2xl mt-10">
								<h1 className="text-4xl z-20 my-10 flex-cc">Create Product</h1>
								<Form onSubmit={handleSubmit}>
									<h3>Name</h3>
									<Form.Input
										fluid
										error={
											errors.name
												? {
													content: 'Please enter a name',
													pointing: 'below',
												  }
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
												? {
													content: 'Please enter a description',
													pointing: 'below',
												  }
												: null
										}
										value={form.description}
										onChange={handleChange}
									/>
									<h3>Category</h3>
									<Form.Radio
										label="Softcopy"
										name="softcopy"
										value={form.category}
										onChange={(e) => handleChangeCategory('Softcopy')}
									/>
									<Form.Radio
										label="Hardcopy"
										name="hardcopy"
										value={form.category}
										onChange={(e) => handleChangeCategory('Hardcopy')}
									/>
									<h3>Price</h3>
									<Form.Input
										error={
											errors.price
												? {
													content: 'Please enter a price',
													pointing: 'below',
												  }
												: null
										}
										placeholder="Price"
										name="price"
										value={form.price}
										onChange={handleChange}
									/>
									<h3>Kelas</h3>
									<Form.Input
										error={
											errors.kelas
												? {
													content: 'Please enter a kelas',
													pointing: 'below',
												  }
												: null
										}
										placeholder="Kelas"
										name="kelas"
										value={form.kelas}
										onChange={handleChange}
									/>
									<h3>Kode Jenis</h3>
									<Form.Input
										error={
											errors.kodeJenis
												? {
													content: 'Please enter a kodeJenis',
													pointing: 'below',
												  }
												: null
										}
										placeholder="kodeJenis"
										name="kodeJenis"
										value={form.kodeJenis}
										onChange={handleChange}
									/>
									<h3>Kode Materi</h3>
									<Form.Input
										error={
											errors.kodeMateri
												? {
													content: 'Please enter a kodeMateri',
													pointing: 'below',
												  }
												: null
										}
										placeholder="kodeMateri"
										name="kodeMateri"
										value={form.kodeMateri}
										onChange={handleChange}
									/>
									<h3>Mata Pelajaran</h3>
									<Form.Input
										error={
											errors.mataPelajaran
												? {
													content: 'Please enter a mataPelajaran',
													pointing: 'below',
												  }
												: null
										}
										placeholder="mataPelajaran"
										name="mataPelajaran"
										value={form.mataPelajaran}
										onChange={handleChange}
									/>
									<h3>Penilaian</h3>
									<Form.Input
										error={
											errors.penilaian
												? {
													content: 'Please enter a penilaian',
													pointing: 'below',
												  }
												: null
										}
										placeholder="penilaian"
										name="penilaian"
										value={form.penilaian}
										onChange={handleChange}
									/>
									<h3>Stok</h3>
									<Form.Input
										error={
											errors.stok
												? {
													content: 'Please enter a stok',
													pointing: 'below',
												  }
												: null
										}
										placeholder="stok"
										name="stok"
										value={form.stok}
										onChange={handleChange}
									/>
									<h3>Terjual</h3>
									<Form.Input
										error={
											errors.terjual
												? {
													content: 'Please enter a terjual',
													pointing: 'below',
												  }
												: null
										}
										placeholder="terjual"
										name="terjual"
										value={form.terjual}
										onChange={handleChange}
									/>
									<div>
										<Button as="label" htmlFor="file" type="button">
											Upload image
										</Button>
										<input
											type="file"
											id="file"
											name="file"
											style={{ display: 'hidden' }}
										/>
									</div>
									<div className="">
										<Button basic color="blue" type="submit">
											Create
										</Button>
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
