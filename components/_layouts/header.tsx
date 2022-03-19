import Link from '@components/_shared/Link';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
import styles from './header.module.css';

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
	const { data: session, status } = useSession();
	const loading = status === 'loading';

	return (
		<header>
			<div className="container flex-sc row">
				<div className="flex-ss row z-40 pt-4 gap-2">
					<img src="/icon/logo.svg" alt="" className="h-5/6" />
					<img
						src="/icon/rocket.svg"
						alt=""
						className="absolute left-[52vh] top-6 z-40 animate-pulse"
					/>
				</div>

				<noscript>
					<style>{'.nojs-show { opacity: 1; top: 0; }'}</style>
				</noscript>
				<div className="mt-4 flex-cc z-40 ml-52">
					<Link href="/" className="px-4 py-2 text-white text-xl hover:bg-opacity-80">
						Home
					</Link>
					<Link
						href={!session ? '/product' : '/admin/product'}
						className="px-4 py-2 text-white text-xl hover:bg-opacity-80"
					>
						Product
					</Link>
					<Link
						href="/about"
						className="px-4 py-2 text-white text-xl hover:bg-opacity-80"
					>
						Tentang Kami
					</Link>
					<img src="/icon/icongaris3.png" alt="" className="px-4 py-2 h-9" />
					<img src="/icon/iconnotif.png" alt="" className="px-4 py-2 h-9" />
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
										signIn('auth0');
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
								{/* <span className={styles.signedInText}>
									<small>Signed in as</small>
									<br />
									<strong>{session.user.email ?? session.user.name}</strong>
								</span> */}
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
				<img
					src="/icon/darksky.png"
					alt="space"
					className="absolute inset-0 w-full z-20 -top-12"
				/>
				<img
					src="/icon/stars.png"
					alt="space"
					className="absolute inset-0 w-full z-10 -top-12"
				/>
			</div>
		</header>
	);
}
