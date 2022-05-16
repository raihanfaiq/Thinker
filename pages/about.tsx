import React from 'react';
import MainLayout from '@components/_layouts/MainLayout';
import { useSession } from 'next-auth/react';
import 'tw-elements';

const About = (): JSX.Element => {
	const { data: session, status } = useSession();
	return (
		<div className="bg-sky">
			<MainLayout title="Home" className="flex-sc col ">
				{/* <img src="/icon/darksky.png" alt="space" className="absolute inset-0 w-full z-20 -top-12" /> */}
				{/* <img src="/icon/stars.png" alt="space" className="absolute inset-0 w-full z-0 -top-12" /> */}
				<section className="container mb-4 mt-16 w-full z-30">
					<div className="bg-whitesky min-h-[450px] rounded-2xl p-10 shadow-2xl">
						<h1 className="text-4xl font-bold text-center z-10">Tentang Thinker</h1>
						<div className="grid grid-cols-2 z-20">
							<div className="flex-cc z-20">
								<img src="/icon/sitting-2.svg" alt="" className="h-5/6" />
								<img
									src="/icon/trophy.svg"
									alt=""
									className="mb-64 animate-bounce"
								/>
								<img src="/icon/PDF.svg" alt="" className="mb-14 animate-bounce" />
							</div>
							<div className="flex-cs col gap-2 p-10">
								<h1 className="text-xl font-semibold">
									Thinker adalah platform online untuk membantu para pelajar sma
									untuk mempermudah dalam memahami materi SMA dan membantu
									mendampingi untuk persiapan dalam memasuki universitas. Dalam
									platform ini, terdapat produk seperti materi pelajaran dan
									kumpulan soal bagi pelajar SMA serta layanan konsultasi. Produk
									yang kami tawarkan memiliki format cetak dan digital.
								</h1>
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
				<section className="container mb-4 mt-16 w-full z-30">
					<div className="bg-whitesky min-h-[450px] rounded-2xl p-10 shadow-2xl">
						<h1 className="text-4xl font-bold text-center z-10">
							Frequently Asked Question
						</h1>
						{/* <div id="accordion-collapse" data-accordion="collapse">
							<h2 id="accordion-collapse-heading-1">
								<button
									type="button"
									className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
									data-accordion-target="#accordion-collapse-body-1"
									aria-expanded="true"
									aria-controls="accordion-collapse-body-1"
								>
									<span>Bagaimana cara membeli produk thinker secara umum? </span>
									<svg
										data-accordion-icon
										className="w-6 h-6 rotate-180 shrink-0"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</button>
							</h2>
							<div
								id="accordion-collapse-body-1"
								className=""
								aria-labelledby="accordion-collapse-heading-1"
							>
								<div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										Setelah memasuki website Thinker, maka Anda harus melakukan
										login (bagi yang sudah memiliki akun Thinker) atau daftar
										(bagi yang belum memiliki akun Thinker). Setelah itu, Anda
										dapat menuju bagian produk dan memilih produk apa saja yang
										akan dibeli. Sebelum melakukan pembayaran, pastikan email,
										alamat yang dimasukkan, dan pemilihan metode pengiriman
										benar. Untuk produk hardcopy akan kami kirim ke alamat
										penerima, sedangkan untuk produk softcopy dan konfirmasi
										konsultasi akan kami kirim melalui email. Selanjutnya
										silahkan lakukan pembayaran dengan metode yang tersedia, dan
										tunggu produk tersebut sampai.
									</p>
								</div>
							</div>
							<h2 id="accordion-collapse-heading-2">
								<button
									type="button"
									className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
									data-accordion-target="#accordion-collapse-body-2"
									aria-expanded="false"
									aria-controls="accordion-collapse-body-2"
								>
									<span>Bagaimana cara membuat akun Thinker?</span>
									<svg
										data-accordion-icon
										className="w-6 h-6 shrink-0"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</button>
							</h2>
							<div
								id="accordion-collapse-body-2"
								className="hidden"
								aria-labelledby="accordion-collapse-heading-2"
							>
								<div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										Terdapat dua cara yang dapat dilakukan, yaitu dengan
										mengklik tombol Daftar, lalu masukkan email dan password.
										Atau Anda juga dapat masuk ke akun Thinker dengan
										menggunakan akun google Anda.
									</p>
								</div>
							</div>
							<h2 id="accordion-collapse-heading-3">
								<button
									type="button"
									className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
									data-accordion-target="#accordion-collapse-body-3"
									aria-expanded="false"
									aria-controls="accordion-collapse-body-3"
								>
									<span>Bagaimana jika ingin merubah alamat pengiriman?</span>
									<svg
										data-accordion-icon
										className="w-6 h-6 shrink-0"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</button>
							</h2>
							<div
								id="accordion-collapse-body-3"
								className="hidden"
								aria-labelledby="accordion-collapse-heading-3"
							>
								<div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										Sebelum melakukan pembayaran, Anda diminta untuk memeriksa
										kembali hal-hal yang diperlukan, termasuk alamat pengiriman.
										Jika Anda ingin mengubahnya, maka Anda dapat mengklik alamat
										yang Anda masukkan tersebut, lalu akan mengarah ke halaman
										konfirmasi alamat, selanjutnya klik Ubah (ini ubah/ubah
										alamat ya ) dan masukkan alamat baru yang Anda inginkan
									</p>
								</div>
							</div>
							<h2 id="accordion-collapse-heading-3">
								<button
									type="button"
									className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
									data-accordion-target="#accordion-collapse-body-3"
									aria-expanded="false"
									aria-controls="accordion-collapse-body-3"
								>
									<span>Selain paypal, apakah ada metode pembayaran lain?</span>
									<svg
										data-accordion-icon
										className="w-6 h-6 shrink-0"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</button>
							</h2>
							<div
								id="accordion-collapse-body-3"
								className="hidden"
								aria-labelledby="accordion-collapse-heading-3"
							>
								<div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										Untuk saat ini, metode pembayaran yang tersedia hanyalah
										Paypal.
									</p>
								</div>
							</div>
							<h2 id="accordion-collapse-heading-3">
								<button
									type="button"
									className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
									data-accordion-target="#accordion-collapse-body-3"
									aria-expanded="false"
									aria-controls="accordion-collapse-body-3"
								>
									<span>
										Siapa yang harus saya hubungi jika mengalami kendala?{' '}
									</span>
									<svg
										data-accordion-icon
										className="w-6 h-6 shrink-0"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</button>
							</h2>
							<div
								id="accordion-collapse-body-3"
								className="hidden"
								aria-labelledby="accordion-collapse-heading-3"
							>
								<div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										Anda bisa menghubungi customer service Thinker melalui
										WhatsApp kami, yaitu 082146751899 atau kontak kami melalui
										sosial media @Thinker dan email ke thinker@gmail.com selama
										jam operasionl berikut: Senin-Jumat, Pukul 07.30 - 08.00 WIB
										Sabtu-Minggu, Pukul 09.00-17.00 WIB. Dalam mengirimkan
										pengaduan, harap mengikuti format di bawah ini: Subjek:
										Berisi topik permasalahan Nama Anda Ceritakan masalah yang
										dialami
									</p>
								</div>
							</div>
						</div> */}
						{/* <div className="col">
							<h2>
								Open <b>one</b>
							</h2>
							<div className="tabs">
								<div className="tab">
									<input type="radio" id="rd1" name="rd" />
									<label className="tab-label" htmlFor="rd1">
										Item 1
									</label>
									<div className="tab-content">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Eos, facilis.
									</div>
								</div>
								<div className="tab">
									<input type="radio" id="rd2" name="rd" />
									<label className="tab-label" htmlFor="rd2">
										Item 2
									</label>
									<div className="tab-content">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Nihil, aut.
									</div>
								</div>
								<div className="tab">
									<input type="radio" id="rd3" name="rd" />
									<label htmlFor="rd3" className="tab-close">
										Close others &times;
									</label>
								</div>
							</div>
						</div> */}
					</div>

					<img
						src="/icon/cloud.png"
						alt=""
						className="w-2/5 absolute -bottom-[680px] left-0 opacity-40 -z-10"
					/>
					<img
						src="/icon/cloud.png"
						alt=""
						className="w-2/5 absolute -bottom-[660px] right-0 opacity-40 -z-10"
					/>
				</section>
			</MainLayout>
		</div>
	);
};

export default About;
