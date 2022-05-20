/* eslint-disable no-mixed-spaces-and-tabs */
import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import MainLayout from '@components/_layouts/MainLayout';
import { ProductType } from '../../../../@types/product';

const EditProduct = ({ product }) => {
	const [form, setForm] = useState({
		name: product.name,
		description: product.description,
		category: product.category,
		price: product.price,
		diskon: product.diskon,
		kelas: product.kelas,
		kodeJenis: product.kodeJenis,
		kodeMateri: product.kodeMateri,
		linkGambar: product.linkGambar,
		mataPelajaran: product.mataPelajaran,
		penilaian: product.penilaian,
		rating: product.rating,
		stok: product.stok,
		terjual: product.terjual,
		jurusan: product.jurusan,
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState<ProductType>({});
	const router = useRouter();

	useEffect(() => {
		if (isSubmitting) {
			if (Object.keys(errors).length === 0) {
				updateProduct();
			} else {
				setIsSubmitting(false);
			}
		}
	}, [errors]);

	// http://localhost:3000
	// http://localhost:3000
	const updateProduct = async () => {
		try {
			const res = await fetch(`http://localhost:3000/api/products/${router.query.id}`, {
				method: 'PUT',
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

	const handleChangeKelas = (kelas: number) => {
		setForm({
			...form,
			kelas: kelas,
		});
	};
	const handleChangeJurusan = (jurusan: string) => {
		setForm({
			...form,
			jurusan: jurusan,
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
								<h1 className="text-4xl z-20 my-10 flex-cc">Update Product</h1>
								<Form onSubmit={handleSubmit}>
									<h3>Nama</h3>
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
									<h3>Deskripsi</h3>
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
									<h3>kategori</h3>
									<Form.Radio
										label="Softcopy"
										name="softcopy"
										checked={form.category === 'Softcopy'}
										onChange={(e) => handleChangeCategory('Softcopy')}
									/>
									<Form.Radio
										label="Hardcopy"
										name="hardcopy"
										checked={form.category === 'Hardcopy'}
										onChange={(e) => handleChangeCategory('Hardcopy')}
									/>
									<h3>Harga</h3>
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
									<Form.Radio
										label="10"
										name="10"
										value={form.kelas}
										onChange={(e) => handleChangeKelas(10)}
									/>
									<Form.Radio
										label="11"
										name="11"
										value={form.kelas}
										onChange={(e) => handleChangeKelas(11)}
									/>
									<Form.Radio
										label="12"
										name="12"
										value={form.kelas}
										onChange={(e) => handleChangeKelas(12)}
									/>
									<Form.Radio
										label="Semua"
										name="semua"
										value={form.kelas}
										onChange={(e) => handleChangeKelas(0)}
									/>
									<h3>Jurusan</h3>
									<Form.Radio
										label="IPA"
										name="IPA"
										value={form.jurusan}
										onChange={(e) => handleChangeJurusan('IPA')}
									/>
									<Form.Radio
										label="IPS"
										name="IPS"
										value={form.jurusan}
										onChange={(e) => handleChangeJurusan('IPS')}
									/>
									<Form.Radio
										label="Semua"
										name="semua"
										value={form.jurusan}
										onChange={(e) => handleChangeJurusan('semua')}
									/>
									{/* <Form.Input
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
									/> */}
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
									<h3>Link Gambar</h3>
									<Form.Input
										error={
											errors.linkGambar
												? {
														content: 'Please enter a link gambar',
														pointing: 'below',
												  }
												: null
										}
										placeholder="Link Gambar"
										name="linkGambar"
										value={form.linkGambar}
										onChange={handleChange}
									/>
									<div className="">
										<Button basic color="blue" type="submit">
											Update
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

EditProduct.getInitialProps = async ({ query: { id } }) => {
	const res = await fetch(`http://localhost:3000/api/products/${id}`);
	const { data } = await res.json();

	return { product: data };
};

export default EditProduct;
