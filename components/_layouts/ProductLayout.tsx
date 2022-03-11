import Head from 'next/head';
import Navbar from '../_slices/NavbarProduct';
import 'semantic-ui-css/semantic.min.css';

const ProductLayout = ({ children }) => (
	<>
		<Head>
			<title>Produk</title>
		</Head>
		<Navbar />
		{children}
	</>
);

export default ProductLayout;
