import React from 'react';
import Link from '@components/_shared/Link';
import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './header.module.css';

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
const Header = () => {
	const { data: session, status } = useSession();
	const loading = status === 'loading';
	return (
		<div className="container flex-sc row">
			<div className={styles.signedInStatus}>
				<p
					className={`nojs-show ${
						!session && loading ? styles.loading : styles.loaded
					}`}
				>
					{!session && (
						<>
							<span className={styles.notSignedInText}>
                You are not signed in
							</span>
							<a
								href={'/api/auth/signin'}
								className={styles.buttonPrimary}
								onClick={(e) => {
									e.preventDefault();
									signIn();
								}}
							>
                Sign in
							</a>
						</>
					)}
					{session?.user && (
						<>
							{session.user.image && (
								<span
									style={{ backgroundImage: `url('${session.user.image}')` }}
									className={styles.avatar}
								/>
							)}
							<span className={styles.signedInText}>
								<small>Signed in as</small>
								<br />
								<strong>{session.user.email ?? session.user.name}</strong>
							</span>
							<a
								href={'/api/auth/signout'}
								className={styles.button}
								onClick={(e) => {
									e.preventDefault();
									signOut();
								}}
							>
                Sign out
							</a>
						</>
					)}
				</p>
			</div>
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
