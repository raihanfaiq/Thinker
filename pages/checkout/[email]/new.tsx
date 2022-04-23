/* eslint-disable no-mixed-spaces-and-tabs */
import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import MainLayout from '@components/_layouts/MainLayout';

const NewAddress = () => {
	const [form, setForm] = useState({
		namaLengkap: '',
		noTelp: '',
		kodePos: '',
		jalan: '',
		detailLain: '',
		tandaiSebagai: '',
		alamatUtama: true,
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState<any>({
		namaLengkap: '',
		noTelp: '',
		kodePos: '',
		jalan: '',
		detailLain: '',
		tandaiSebagai: '',
		alamatUtama: true,
	});
	const router = useRouter();

	useEffect(() => {
		if (isSubmitting) {
			console.log('errors', errors);
			if (Object.keys(errors).length === 0) {
				console.log(form);
				createAddress();
			} else {
				setIsSubmitting(false);
			}
		}
	}, [errors]);

	const createAddress = async ({ query: { email } }) => {
		try {
			const res = await fetch(`http://localhost:3000/api/users/address/${email}`, {
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
			tandaiSebagai: category,
		});
	};

	const validate = () => {
		const err: any = {};

		if (!form.namaLengkap) {
			err.namaLengkap = 'Nama is required';
		}
		if (!form.jalan) {
			err.jalan = 'Jalan is required';
		}

		return err;
	};

	return (
		<div className="bg-sky">
			<MainLayout title="New Address">
				<section className="container">
					<div className="flex flex-cc col">
						{isSubmitting ? (
							<Loader active inline="centered" size="massive">
								Loading
							</Loader>
						) : (
							<div className="z-20 w-1/2 bg-gradient-to-bl from-sky shadow-2xl p-4 rounded-2xl mt-10">
								<h1 className="text-4xl z-20 my-4 flex-cc">Create Address</h1>
								<Form onSubmit={handleSubmit}>
									<h3>Kontak</h3>
									<div className="mb-3">
										<Form.Input
											fluid
											error={
												errors.namaLengkap
													? {
														content: 'Please enter a name',
														pointing: 'below',
												  }
													: null
											}
											placeholder="Nama Lengkap"
											name="namaLengkap"
											value={form.namaLengkap}
											onChange={handleChange}
										/>
									</div>
									<div className="mb-3">
										<Form.Input
											fluid
											placeholder="No Telepon / email"
											name="noTelp"
											error={
												errors.noTelp
													? {
														content: 'Please enter a noTelp',
														pointing: 'below',
												  }
													: null
											}
											value={form.noTelp}
											onChange={handleChange}
										/>
									</div>
									<h3>Alamat</h3>
									<div className="mb-3">
										<Form.Input
											fluid
											error={
												errors.jalan
													? {
														content: 'Please enter a name',
														pointing: 'below',
												  }
													: null
											}
											placeholder="Nama Jalan, Gedung, No. rumah"
											name="jalan"
											value={form.jalan}
											onChange={handleChange}
										/>
									</div>
									<div className="mb-3">
										<Form.Input
											fluid
											placeholder="Provinsi, Kota, Kecamatan, Kode Pos"
											name="kodePos"
											error={
												errors.kodePos
													? {
														content: 'Please enter a kodePos',
														pointing: 'below',
												  }
													: null
											}
											value={form.kodePos}
											onChange={handleChange}
										/>
									</div>
									<div className="mb-3">
										<Form.Input
											fluid
											placeholder="Detail Lainya"
											name="detailLain"
											error={
												errors.detailLain
													? {
														content: 'Please enter a detailLain',
														pointing: 'below',
												  }
													: null
											}
											value={form.detailLain}
											onChange={handleChange}
										/>
									</div>
									<h3>Pengaturan</h3>
									<div className="mb-3 flex row flex-bs">
										<p>Tandai Sebagai</p>
										<div className="flex row">
											<Form.Radio
												label="Rumah"
												name="rumah"
												checked={form.tandaiSebagai === 'Rumah'}
												onChange={(e) => handleChangeCategory('Rumah')}
											/>
											<div className="ml-3">
												<Form.Radio
													label="Kantor"
													name="kantor"
													checked={form.tandaiSebagai === 'Kantor'}
													onChange={(e) => handleChangeCategory('Kantor')}
												/>
											</div>
										</div>
									</div>
									<div className="">
										<Button basic color="blue" type="submit">
											Simpan
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

export default NewAddress;
