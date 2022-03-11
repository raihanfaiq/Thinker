import Link from 'next/link';

const NavbarProduct = () => (
	<nav className="navbar">
		<Link href="/">
			<a className="navbar-brand">Produk</a>
		</Link>
		<Link href="/product/new">
			<a className="create">Produk baru</a>
		</Link>
	</nav>
);

export default NavbarProduct;
