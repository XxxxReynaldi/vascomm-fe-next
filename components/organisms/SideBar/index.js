import Menu from './Menu';
import Profile from './Profile';

export default function SideBar(props) {
	const { activeMenu } = props;
	return (
		<section className='sidebar'>
			<div className='content pt-50 pb-30 ps-30'>
				<Profile />
				<div className='menus'>
					<Menu icon='menu-overview' title='Pelanggan' href='/customer' active={activeMenu === 'customer'} />
					<Menu icon='menu-logout' title='Log Out' href='/sign-in' />
				</div>
			</div>
		</section>
	);
}
