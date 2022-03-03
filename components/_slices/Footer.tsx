import React from 'react';
import Link from '@components/_shared/Link';

const Footer = (): JSX.Element => {
	return (
		<div className="row">
			<div className="container flex-sc row bg-blue-400 pb-10 mt-20">
				<div className="flex-ss col">
					<h1 className="mt-10 text-4xl font-bold text-center z-10">Thinker</h1>
					<p className="max-w-sm mb-8 text-center z-10">
                    -Jadikan Masa SMA Kamu Lebih Mudah-
					</p>
				</div>
			</div>
			<div className="flex-cc col relative py-4 w-full bg-stone-700">
				<div className="container flex-bc -lg:flex-cc -lg:col">
					<div className="flex-cc gap-2">
						<a href=''>
							<img src="/icon/fb.svg" alt="" className="" />
						</a>
						<a href=''>
							<img src="/icon/twt.svg" alt="" className="" />
						</a>
						<a href=''>
							<img src="/icon/ig.svg" alt="" className="" />
						</a>
					</div>
					<div className="flex-cc absolute inset-0 py-8 pb-10 full -lg:flex-ce">
						<p className="font-medium text-white">
						© 2022 Thinker All Right Reserved
						</p>
					</div>

					<p className="text-sm font-light text-white opacity-60 -lg:mb-12 -lg:mt-8">
						<Link
							href=''
							className="hover:underline"
						>
						Terms
						</Link>
						<span className="">{' & '}</span>
						<Link
							href=''
							className="hover:underline"
						>
						conditions
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
