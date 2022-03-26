import React from 'react';
import { useSession } from 'next-auth/react';
import Buyer from './buyer';
import Admin from './admin';

const Index = (): JSX.Element => {
	const { data: session } = useSession();
	return (
		<div>
			{!session && <Buyer />}
			{session?.user && session?.user.name === 'thinkeradmmin' && <Admin />}
			{session?.user && session?.user.name !== 'thinkeradmmin' && <Buyer />}
			{session?.user && console.log(session.user)}
		</div>
	);
};

export default Index;
