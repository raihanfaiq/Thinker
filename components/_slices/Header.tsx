import React from 'react';
import Link from '@components/_shared/Link';

const Header = (): JSX.Element => {
	return (
		<div className="container flex-sc row">
			<div className="flex-ss row z-40 pt-4 gap-2">
				<img src="/icon/logo.svg" alt="" className="h-5/6" />
			</div>
			<img src="/icon/rocket.svg" alt="" className="absolute left-[52vh] top-6 z-40 animate-pulse" />
			<div className="ml-64 mt-4 flex-cc gap-4 z-40">
				<Link href="/about" className="px-4 py-2 text-white text-xl hover:bg-opacity-80">
					Home
				</Link>
				<Link href="/product" className="px-4 py-2 text-white text-xl hover:bg-opacity-80">
					Product
				</Link>
				<Link href="/about" className="px-4 py-2 text-white text-xl hover:bg-opacity-80">
					Tentang Kami
				</Link>
				<img src="/icon/icon.png" alt="" className="px-4 py-2 h-12" />
			</div>
			<img src="/icon/darksky.png" alt="space" className="absolute inset-0 w-full z-20 -top-12" />
			<img src="/icon/stars.png" alt="space" className="absolute inset-0 w-full z-10 -top-12" />
		</div>
	);
};

export default Header;
