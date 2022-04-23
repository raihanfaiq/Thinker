import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
import MainLayout from '@components/_layouts/MainLayout';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Index = ({ providers }) => {
	const { data: session, status } = useSession();
	const router = useRouter();

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
										<div className="flex flex-col bg-white rounded-b p-5">
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
	const res = await fetch('http://localhost:3000/api/provider/quenttok@gmail.com/62638ed782af2c284acbf7a7');
	console.log(email, id);
	const { data } = await res.json();
	console.log('hai', data);
	const harga = data.harga;

	return { providers: harga };
};
export default Index;
