import React from 'react';
import MainLayout from '@components/_layouts/MainLayout';
import Link from '@components/_shared/Link';

const Index = (): JSX.Element => {
	return (
		<MainLayout title="Home" className="flex-sc col">
			<h1 className="mb-4 mt-48 text-4xl font-bold text-center z-10">Mau cari apa hari ini?</h1>
		</MainLayout>
	);
};

// Above are sample use of

// useLayout: which is a custom hooks in context management
// Alert: custom popping out alert box that automatically vanish
// Link: custom link that can be styled into anything and is so comfortable
// MainLayout: open 'components/_layouts/', that is the place where you put navbar and footer, not here

export default Index;
