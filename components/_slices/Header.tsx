import React from 'react';
import Link from '@components/_shared/Link';

const Header = (): JSX.Element => {
	return (
		<div className="container flex-sc row">
			<div className="flex-ss col z-40 pt-4">
				<img src="/icon/logo.svg" alt="" className="h-5/6" />
			</div>
			<div className="ml-64 mt-4 flex-cc gap-4 z-40">
				<Link href="/about" className="px-4 py-2 text-white text-xl hover:bg-opacity-80">
					Home
				</Link>
				<Link href="/form" className="px-4 py-2 text-white text-xl hover:bg-opacity-80">
					Product
				</Link>
				<Link href="/about" className="px-4 py-2 text-white text-xl hover:bg-opacity-80">
					Tentang Kami
				</Link>
				<img src="/icon/icon.png" alt="" className="px-4 py-2 h-12" />
			</div>
		</div>
	);
};

export default Header;
