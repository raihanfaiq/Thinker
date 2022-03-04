import React from 'react';
import Link from '@components/_shared/Link';

const Footer = (): JSX.Element => {
	return (
		<div className="row">
			<img src="/icon/tree.svg" alt="" className="absolute right-0 -bottom-[1400px] z-10" />
			<div className="container">
				<img src="/icon/footer-logo.svg" alt="" className="relative -bottom-24 z-40" />
			</div>
			<div className="w-full bg-ground min-h-[180px] opacity-80" />
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
					<div className="flex-cc absolute inset-0 bottom-10 py-8 pb-8 full">
						<p className="font-medium text-white">
						© 2022 Thinker All Right Reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
