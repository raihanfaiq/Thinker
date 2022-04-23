import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
import MainLayout from '@components/_layouts/MainLayout';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Index = ({ providers }) => {
	const { data } = useSession();
	const [form, setForm] = useState({ provider: {}, email: data?.user.email});
	const router = useRouter();

	const handleClick = async (provider: any) => {
		try {
			const res = await fetch('http://localhost:3000/api/users', {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ provider: provider, email: data?.user.email}),
			});
			router.push(`/checkout/${data?.user.email}/final`);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="bg-sky">
			<MainLayout title="New Product">
				<section className="container">
					<div className="flex flex-cc col">
						<div className="flex flex-col">
							<div className="flex flex-col items-center justify-center mt-8 z-20 w-full">
								<h1 className="text-center text-white mb-12">Pilih Provider</h1>
								{/* <!-- User Card --> */}
								{providers.map((provider, i) => (
									<div className="flex flex-col shadow-md cursor-pointer w-[60rem] hover:-translate-y-1 duration-300 mb-8"  key={i}>
										{/* <!-- Body --> */}
										<div className="flex flex-col bg-white rounded-xl p-5 hover:bg-gray-300" onClick={() => handleClick(provider)}>
											{/* <!-- Title --> */}
											<div className="flex-bs flex-row">
												<div className="text-xl font-semibold text-gray-900 hover:underline truncate">
													{provider.nama} - {provider.layanan}
												</div>
												<div className="text-xl font-semibold truncate mt-1">
													Rp. {provider.harga}
												</div>
											</div>
											<div className="text-xl text-gray-600 truncate mt-1">
												Akan diterima pada tanggal 25-27 April
											</div>
											<div className="text-xl text-gray-600 truncate mt-1">
												Tidak mendukung bayar di tempat (COD)
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</MainLayout>
		</div>
	);
};

Index.getInitialProps = async ({ query: { email, id } }) => {
	const res = await fetch(`http://localhost:3000/api/provider/${email}/${id}`);
	const { data } = await res.json();
	const harga = data.harga;

	return { providers: harga };
};
export default Index;
