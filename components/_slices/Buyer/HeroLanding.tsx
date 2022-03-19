const HeroLanding = (): JSX.Element => {
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
							<div className="p-2 w-36 rounded-xl border-2 border-black bg-gradient-to-bl from-sky text-justify z-10">
								<a href="/api/auth/signin">
									<h1 className="text-xl font-bold text-center z-10">daftar</h1>
								</a>
							</div>
							<div className="p-2 w-36 rounded-xl border-2 border-black bg-gradient-to-bl from-blue text-justify z-10">
								<a href="/api/auth/signin">
									<h1 className="text-xl font-bold text-center z-10">login</h1>
								</a>
							</div>
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
