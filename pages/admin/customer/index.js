import SideBar from '../../../components/organisms/SideBar';
import CustomerContent from '../../../components/organisms/CustomerContent';

export default function Customer() {
	return (
		<section className='overview overflow-auto'>
			<SideBar activeMenu='customer' />
			<CustomerContent />
		</section>
	);
}
