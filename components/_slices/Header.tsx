import React from 'react';
import Link from '@components/_shared/Link';

const Header = (): JSX.Element => {
	return (
		<div className="container row">
			<div className="flex-sc row">
				<div className="flex-ss col">
					<h1 className="mt-10 text-4xl font-bold text-center z-10">Thinker</h1>
					<p className="max-w-sm mb-8 text-center z-10">
                    -Jadikan Masa SMA Kamu Lebih Mudah-
					</p>
				</div>
				<div className="ml-32 mt-4 flex-cc gap-4">
					<Link href="/about" className="px-4 py-2 hover:bg-opacity-80">
					Home
					</Link>
					<Link href="/form" className="px-4 py-2 hover:bg-opacity-80">
					Product
					</Link>
					<Link href="/about" className="px-4 py-2 hover:bg-opacity-80">
					Tentang Kami
					</Link>
					<Link href="/form" className="px-4 py-2 hover:bg-opacity-80">
					V
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
