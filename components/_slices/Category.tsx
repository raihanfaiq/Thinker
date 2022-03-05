const Category = (): JSX.Element => {
	return (
		<section className="container mb-4 mt-16 w-full z-30">
			<div className="bg-whitesky min-h-[450px] rounded-2xl p-10 shadow-2xl">
				<h1 className="text-4xl font-bold text-center z-10">Produk</h1>
			</div>
			<img src='/icon/cloud.png' alt="" className="w-2/5 absolute -bottom-[680px] left-0 opacity-40 -z-10" />
			<img src='/icon/cloud.png' alt="" className="w-2/5 absolute -bottom-[660px] right-0 opacity-40 -z-10" />
		</section>
	);
};

export default Category;