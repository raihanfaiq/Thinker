import React from 'react';
import Link from '@components/_shared/Link';

const Index = (): JSX.Element => {
	return (
		<div title="Home" className="row ml-10">
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

// Above are sample use of

// useLayout: which is a custom hooks in context management
// Alert: custom popping out alert box that automatically vanish
// Link: custom link that can be styled into anything and is so comfortable
// MainLayout: open 'components/_layouts/', that is the place where you put navbar and footer, not here

export default Index;
