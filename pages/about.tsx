import React, {useState} from 'react';
import MainLayout from '@components/_layouts/MainLayout';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import faq from './faq.json';

const About = (): JSX.Element => {
	const [open, setOpen] = useState(0);
	const items = faq.items;

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
						<div className="space-y-4 leading-8 pt-4">
							{items.map((item, index) => (
								<AccordionItem
									key={index}
									index={index}
									data={item}
									open={open}
									setOpen={setOpen}
								/>
							))}
						</div>
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

interface AccordionItemProps {
	data: any;
	setOpen(number): void;
	index: number;
	open: number;
}

const AccordionItem = ({ data, setOpen, open, index }: AccordionItemProps) => {
	return (
		<div className="pt-4">
			<div className="flex text-lg cursor-pointer" onClick={() => setOpen(index === open ? 10 : index)}>
				<div
					className={`transition-all ${
						index === open ? 'font-bold' : 'font-semibold'
					}`}
				>
					{data.question}
				</div>
				{index === open ? (
					<FiMinusCircle size={24} className="ml-auto" />
				) : (
					<FiPlusCircle size={24} className="ml-auto" />
				)}
			</div>

			<div
				className={`overflow-hidden transition-all duration-700 mr-4 ${
					open === index ? 'max-h-120' : 'max-h-0'
				}`}
			>
				{data.answer}
			</div>
		</div>
	);
};

export default About;
