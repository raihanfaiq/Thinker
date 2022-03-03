const HeroLanding = (): JSX.Element => {
	return (
		<section className="container mb-4 mt-16 w-full">
			<div className="bg-whitesky min-h-[450px] rounded-2xl p-10">
				<div className="grid grid-cols-2 gap-4">
					<div className="flex-cc">
						<img src='/icon/sitting-2.svg' alt="" className="h-5/6" />
					</div>
					<div className="flex-cs col gap-4 p-10">
						<h1 className="text-xl font-semibold z-10">Halo selamat datang di Thinker</h1>
						<h1 className="text-4xl font-bold z-10">
							Temukan sumber belajar asik sesuai dengan dirimu!
						</h1>
						<h1 className="text-xl z-10">
							Mulailah mencari materi belajar, kumpulan soal, dan layanan konsultasi dengan harga terjangkau.
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroLanding;