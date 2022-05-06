import MainLayout from '@components/_layouts/MainLayout';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from 'semantic-ui-react';
import Layout from '../../components/_layouts/layout';

export default function MePage() {
	const { data } = useSession();

	return (
		<div className="bg-sky">
			<MainLayout title="New User">
				<section className="container">
					<div className="flex flex-cc col">
						<div className="flex flex-col">
							<div className="flex flex-col items-center justify-center mt-32 z-20 w-full">
								{/* <!-- User Card --> */}
								<div className="flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">
									{/* <!-- Body --> */}
									<div className="flex flex-col bg-white rounded-b p-3">
										{/* <!-- Title --> */}
										<div className="text-xl font-semibold text-gray-900 hover:underline truncate">
											{data?.user.name}
										</div>

										{/* <!-- Author - Category --> */}
										<div className="text-xxs text-gray-600 truncate mt-1 mb-3">
											{data?.user.email}
										</div>
										{/* <!-- Preview --> */}
										<div className="inline relative group h-48 mb-6">
											{/* <!-- Thumbnail --> */}
											<img
												className="absolute rounded-t object-cover h-full w-full"
												src={data?.user.image}
												alt="User Preview"
											/>
										</div>

										{/* <!-- Author - Category --> */}
										<Link href={`/cart/${data?.user.email}`}>
											<Button primary>Lihat Cart</Button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</MainLayout>
		</div>
	);
}
