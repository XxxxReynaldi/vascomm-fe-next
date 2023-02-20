import Category from './Category';
import TableRow from './TableRow';

export default function CustomerContent() {
	return (
		<main className='main-wrapper'>
			<div className='ps-lg-0'>
				<h2 className='text-4xl fw-bold color-palette-1 mb-30'>Halaman Daftar Pelanggan</h2>

				<div className='latest-transaction'>
					<p className='text-lg fw-medium color-palette-1 mb-14'>Daftar pelanggan saat ini</p>
					<div className='main-content main-content-table overflow-auto'>
						<table className='table table-borderless'>
							<thead>
								<tr className='color-palette-1'>
									<th className='text-start' scope='col'>
										Nama
									</th>
									<th scope='col'>Email</th>
									<th scope='col'>Status</th>
									<th scope='col'>Opsi</th>
								</tr>
							</thead>
							<tbody>
								<TableRow
									image='overview-1.png'
									title='User 1'
									role='pelanggan'
									email='user1@gmail.com'
									status='Pending'
								/>
								<TableRow
									image='overview-2.png'
									title='User 2'
									role='pelanggan'
									email='user2@gmail.com'
									status='Active'
								/>
								<TableRow
									image='overview-3.png'
									title='User 3'
									role='pelanggan'
									email='user3@gmail.com'
									status='Inactive'
								/>
								<TableRow
									image='overview-4.png'
									title='User 4'
									role='pelanggan'
									email='user4@gmail.com'
									status='Pending'
								/>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</main>
	);
}
