const Testimony = (): JSX.Element => {
	return (
		<section className="container mb-4 mt-16 w-full z-30">
			<div className="bg-whitesky min-h-[450px] rounded-2xl p-10 grid shadow-2xl opacity-90">
				<h1 className="text-4xl font-bold text-center z-10 mb-4">
					Yuk Dengarkan Cerita Mereka Bersama THINKER
				</h1>
				<div className="grid grid-cols-3 gap-4">
					<div className="flex-cc">
						<img src="/icon/standing-4.png" alt="" className="h-4/6" />
					</div>
					<div className="flex-cc">
						<div className="h-64 p-5 rounded-2xl text-l bg-gradient-to-bl from-blue-300 to-whitesky text-justify z-10 shadow-lg my-5 mx-5">
							<p>
								&quot; THINKER adalah paket lengkap buat anak SMA dengan harga yang
								terjangkau, kita udah bisa milih apa yang kita mau. Pokoknya THINKER
								keren banget dan sangat bermanfaat. Terima kasih THINKER &quot;
								<br />
								<br />
								Ani (8/10)-Pelajar Kelas 12 SMA Harapan
							</p>
							<div className="p-2 w-20 rounded-xl bg-blue-300 text-justify z-10 ml-64 mt-2 shadow-lg">
								<a href="#">
									<h1 className="text-xl font-bold text-center z-10">edit</h1>
								</a>
							</div>
						</div>
					</div>
					<div className="flex-cc">
						<div className="h-64 p-5 rounded-2xl text-l  bg-gradient-to-bl from-blue-300 to-whitesky text-justify z-10 shadow-lg my-5 mx-5">
							“Buat yang bingung mau belajar untuk ujian boleh banget nih beli materi
							belajar dan kumpulan soal di THINKER. Bener-bener ngebantu banget.”
							<br />
							<br />
							Budi (9/10)-Pelajar Kelas 10 SMA Jaya
							<div className="p-2 w-20 rounded-xl bg-blue-300 text-justify z-10 ml-64 mt-8 shadow-lg">
								<a href="#">
									<h1 className="text-xl font-bold text-center z-10">edit</h1>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimony;
