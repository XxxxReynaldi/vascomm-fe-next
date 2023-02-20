import '../styles/globals.css';
import '../styles/homepage.css';
import '../styles/utilities.css';
import '../styles/detail.css';
import '../styles/checkout.css';
import '../styles/complete-checkout.css';
import '../styles/sign-in.css';
import '../styles/sign-up.css';
import '../styles/sign-up-photo.css';
import '../styles/sign-up-success.css';
import '../styles/404-not-found.css';
import '../styles/sidebar.css';
import '../styles/overview.css';
import '../styles/transactions.css';
import '../styles/transactions-detail.css';
import '../styles/edit-profile.css';
import '../styles/navbar-log-in.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				{/* Bootstrap CSS */}
				<link
					href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css'
					rel='stylesheet'
					integrity='sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x'
					crossOrigin='anonymous'
				/>

				{/* AOS Animation */}
				<link href='https://unpkg.com/aos@2.3.1/dist/aos.css' rel='stylesheet' />
			</Head>
			<Component {...pageProps} />;
			<ToastContainer theme='colored' />
		</>
	);
}

export default MyApp;
