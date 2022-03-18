import { signIn } from 'next-auth/react';

export default function AccessDenied() {
	return (
		<>
			<h1>Access Denied</h1>
			<p>
				<button
					// href="/api/auth/signin"
					onClick={(e) => {
						e.preventDefault();
						signIn('auth0');
					}}
				>
          You must be signed in to view this page
				</button>
			</p>
		</>
	);
}
