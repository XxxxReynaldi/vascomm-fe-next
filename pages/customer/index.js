import CustomerContent from '../../components/organisms/CustomerContent';
import SideBar from '../../components/organisms/SideBar';

export default function Customer() {
	return (
		<section className='overview overflow-auto'>
			<SideBar activeMenu='customer' />
			<CustomerContent />
		</section>
	);
}
