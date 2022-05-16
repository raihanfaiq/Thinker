import { useSession } from 'next-auth/react';
import React from 'react';
import styles from '../../_layouts/header.module.css';
const HeroLanding = (): JSX.Element => {
	const { data: session, status } = useSession();
	return (
		<section className="container mb-4 mt-16 w-full z-30">
			<div className="bg-whitesky min-h-[450px] rounded-2xl p-10 shadow-2xl">
				<div className="grid grid-cols-2 z-20">
					<div className="flex-cc z-20">
						<img src="/icon/sitting-2.svg" alt="" className="h-5/6" />
						<img src="/icon/trophy.svg" alt="" className="mb-64 animate-bounce" />
						<img src="/icon/PDF.svg" alt="" className="mb-14 animate-bounce" />
					</div>
					<div className="flex-cs col gap-2 p-10">
						<h1 className="text-xl font-semibold">Halo selamat datang di Thinker!</h1>
						<h1 className="text-4xl font-bold">
							Temukan sumber belajar asik sesuai dengan dirimu!
						</h1>
						<h1 className="text-xl">
							Mulailah mencari materi belajar, kumpulan soal, dan layanan konsultasi
							dengan harga terjangkau.
						</h1>
						<div className="flex-cc row gap-4 mt-4">
							{!session && (
								<>
									<div className="p-2 w-36 rounded-xl border-2 border-black bg-gradient-to-bl from-sky text-justify z-10">
										<a href="/api/auth/signin">
											<h1 className="text-xl font-bold text-center z-10">
												Daftar
											</h1>
										</a>
									</div>
									<div className="p-2 w-36 rounded-xl border-2 border-black bg-gradient-to-bl from-blue text-justify z-10">
										<a href="/api/auth/signin">
											<h1 className="text-xl font-bold text-center z-10">
												Login
											</h1>
										</a>
									</div>
								</>
							)}
							{session?.user && (
								<div className="flex-cc row gap-4 mt-4">
									<div className="flex row justify-center">
										<div className="mb-3 xl:w-96">
											<div className="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
												<input
													type="search"
													className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
													placeholder="Search"
													aria-label="Search"
													aria-describedby="button-addon2"
												/>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<img
				src="/icon/cloud.png"
				alt=""
				className="w-2/5 absolute -bottom-20 left-0 opacity-40 -z-10"
			/>
			<img
				src="/icon/cloud.png"
				alt=""
				className="w-2/5 absolute -bottom-24 right-0 opacity-40 -z-10"
			/>
		</section>
	);
};

export default HeroLanding;
