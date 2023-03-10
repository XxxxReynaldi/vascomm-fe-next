import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SignUpForm from '../components/organisms/SignUpForm';

export default function SignUp() {
	useEffect(() => {
		document.title = `Test | Halaman Pendaftaran`;
		return () => {
			document.title = `Test Stack`;
		};
	});

	return (
		<section className='sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47'>
			<div className='container mx-auto'>
				<div className='pb-50'>
					<Link href='/' className='navbar-brand'>
						<Image src='/icon/logo.svg' width={60} height={60} alt='logo' />
					</Link>
				</div>
				<SignUpForm />
			</div>
		</section>
	);
}
