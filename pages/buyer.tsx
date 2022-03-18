import React from 'react';
import MainLayout from '@components/_layouts/MainLayout';
import Link from '@components/_shared/Link';
import HeroLanding from '@components/_slices/Buyer/HeroLanding';
import Category from '@components/_slices/Buyer/Category';
import Testimony from '@components/_slices/Buyer/Testimony';

const Index = (): JSX.Element => {
	return (
		<div className="bg-sky">
			<MainLayout title="Home" className="flex-sc col ">
				{/* <img src="/icon/darksky.png" alt="space" className="absolute inset-0 w-full z-20 -top-12" /> */}
				{/* <img src="/icon/stars.png" alt="space" className="absolute inset-0 w-full z-0 -top-12" /> */}
				<HeroLanding />
				<Category />
				<Testimony />
			</MainLayout>
		</div>
	);
};

export default Index;
