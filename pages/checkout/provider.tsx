import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
import MainLayout from '@components/_layouts/MainLayout';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Index = ({ products, address }) => {
	const { data: session, status } = useSession();
	const router = useRouter();
	const increment = async (product) => {
		const userEmail = router.query.email;
		const quantity = product.quantity;
		// console.log(quantity + 1);
		// console.log(product.productId);

		const response = await fetch('/api/cart/update/increment', {
			method: 'PUT',
			body: JSON.stringify({ userEmail, productId: product.productId }),
		});
		window.location.reload();
		// const data = await response.json();
		// console.log(data);
		// alert('product added to cart');
	};
	const decrement = async (product) => {
		const userEmail = router.query.email;
		const quantity = product.quantity;
		// console.log(quantity + 1);
		// console.log(product.productId);

		const response = await fetch('/api/cart/update/decrement', {
			method: 'PUT',
			body: JSON.stringify({ userEmail, productId: product.productId }),
		});
		window.location.reload();
		// const data = await response.json();
		// console.log(data);
		// alert('product added to cart');
	};
	const deleteButton = async (product) => {
		const userEmail = router.query.email;
		// console.log(quantity + 1);
		// console.log(product.productId);

		const response = await fetch('/api/cart/update/delete', {
			method: 'PUT',
			body: JSON.stringify({ userEmail, productId: product.productId }),
		});
		window.location.reload();
		// const data = await response.json();
		// console.log(data);
		// alert('product added to cart');
	};

	console.log(address);
	return (
		<div className="bg-sky">
			<MainLayout title="New Product">
				<section className="container">
					<div className="flex flex-cc col">
						<div className="flex flex-col">
							<div className="flex flex-col items-center justify-center mt-8 z-20 w-full">
								<h1 className="text-center text-white mb-12">Pilih Alamat</h1>
								{/* <!-- User Card --> */}
								{address.map((address, i) => (
									<div className="flex flex-col shadow-md cursor-pointer w-[60rem] hover:-translate-y-1 duration-300 mb-8"  key={i}>
										{/* <!-- Body --> */}
										<div className="flex flex-col bg-white rounded-b p-5">
											{/* <!-- Title --> */}
											<div className="flex flex-row">
												<div className="text-xl font-semibold text-gray-900 hover:underline truncate">
													{address.namaLengkap}
												</div>
												<div className="text-xxs text-gray-600 truncate mt-1 ml-3">
													{address.alamatUtama ? '[Utama]' : ''}
												</div>
											</div>

											{/* <!-- Author - Category --> */}
											<div className="text-xxs text-gray-600 truncate mt-1">
												{address.noTelp}
											</div>
											<div className="text-xxs text-gray-600 truncate mt-1">
												{address.jalan} ({address.tandaiSebagai})
											</div>
											<div className="text-xxs text-gray-600 truncate mt-1">
												{address.kodePos} - {address.detailLain}
											</div>
											<div className="w-24 mt-1">
												<Link href={'/checkout/new'}>
													<Button>Ubah</Button>
												</Link>
											</div>
										</div>
									</div>
								))}
								<div className="flex flex-col shadow-md cursor-pointer w-64 hover:-translate-y-1 duration-300" >
									{/* <!-- Author - Category --> */}
									<Link href={'/checkout/new'}>
										<Button primary>Tambah Alamat</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</MainLayout>
		</div>
	);
};

Index.getInitialProps = async ({ query: { email } }) => {
	const res = await fetch('http://localhost:3000/api/users/address');
	const { data } = await res.json();
	let obj = data.find((o) => o.email === 'quenttok@gmail.com');
	const address = obj.address;
	obj = obj.products;

	return { products: obj, address: address };
};
export default Index;
