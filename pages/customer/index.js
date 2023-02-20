import { useEffect } from 'react';
import CustomerContent from '../../components/organisms/CustomerContent';
import SideBar from '../../components/organisms/SideBar';

export default function Customer() {
	useEffect(() => {
		document.title = `Test | Halaman Pelanggan`;
		return () => {
			document.title = `Test Stack`;
		};
	});
	return (
		<section className='overview overflow-auto'>
			<SideBar activeMenu='customer' />
			{/* <CustomerContent /> */}
		</section>
	);
}
