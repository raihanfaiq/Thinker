const Category = (): JSX.Element => {
	return (
		<section className="container mb-4 mt-16 w-full z-30">
			<div className="bg-whitesky min-h-[450px] rounded-2xl p-10 shadow-2xl">
				<h1 className="text-4xl font-bold text-center z-10">Produk</h1>
				<div className="grid grid-cols-2 flex items-center justify-center">
					<div className="grid grid-cols-3 bg-blue-300 rounded-2xl shadow-lg my-5 mx-5 justify-">
						<div className="flex-cc">
							<a href="#">
								<img src="/icon/book.svg" alt="" className="" />
							</a>
						</div>
						<div className="flex-cc col gap-4 p-10 col-span-2">
							<h1 className="text-2xl text-center font-bold">
								Materi Pelajaran
							</h1>
							<h1 className="text-lg text-center z-10">
								Cek ketersediaan materi pelajaran
							</h1>
						</div>
					</div>
					<div className="grid grid-cols-3 bg-blue-300 rounded-2xl shadow-lg my-5 mx-5">
						<div className="flex-cc">
							<a href="#">
								<img src="/icon/sertif.svg" alt="" className="" />
							</a>
						</div>
						<div className="flex-cc col gap-4 p-10 col-span-2">
							<h1 className="text-2xl text-center font-bold">
								Kumpulan Soal
							</h1>
							<h1 className="text-lg text-center z-10">
								Cek ketersediaan soal beserta jawabannya 
							</h1>
						</div>
					</div>
					<div className="bg-blue-300 rounded-2xl shadow-lg my-5 mx-5 col-span-2 flex justify-items-center overflow-auto">
						<div className="flex-cc ml-auto">
							<a href="#">
								<img src="/icon/whiteboard-teacher.svg" alt="" className="" />
							</a>
						</div>
						<div className="py-10 px-20 mr-auto">
							<h1 className="text-4xl text-center font-bold">
								Konsultasi
							</h1>
							<h1 className="text-lg text-center">
								Cek ketersediaan konselor dan layanan konseling 
							</h1>
						</div>
					</div>
				</div>
			</div>
			<img src='/icon/cloud.png' alt="" className="w-2/5 absolute -bottom-[680px] left-0 opacity-40 -z-10" />
			<img src='/icon/cloud.png' alt="" className="w-2/5 absolute -bottom-[660px] right-0 opacity-40 -z-10" />

		</section>
	);
};

export default Category;
