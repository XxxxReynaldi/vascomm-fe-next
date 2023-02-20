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
										Game
									</th>
									<th scope='col'>Item</th>
									<th scope='col'>Price</th>
									<th scope='col'>Status</th>
								</tr>
							</thead>
							<tbody>
								<TableRow
									image='overview-1.png'
									title='Mobile Legends: The New Battle 2021'
									category='Desktop'
									item={200}
									price={290000}
									status='Pending'
								/>
								<TableRow
									image='overview-2.png'
									title='Call of Duty:Modern'
									category='Desktop'
									item={550}
									price={740000}
									status='Success'
								/>
								<TableRow
									image='overview-3.png'
									title='Clash of Clans'
									category='Mobile'
									item={100}
									price={120000}
									status='Failed'
								/>
								<TableRow
									image='overview-4.png'
									title='The Royal Game'
									category='Mobile'
									item={225}
									price={200000}
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
