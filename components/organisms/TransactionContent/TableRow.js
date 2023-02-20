import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export default function TableRow(props) {
	const { image, title, category, item, price, status, href } = props;
	const classTitle = cx({
		'float-start icon-status': true,
		pending: status === 'Pending',
		success: status === 'Success',
		failed: status === 'Failed',
	});

	return (
		<tr data-category={status.toLowerCase()} className='align-middle'>
			<th scope='row'>
				<picture>
					<img className='float-start me-3 mb-lg-0 mb-3' src={`/img/${image}`} width={80} height={60} alt='' />
				</picture>
				<div className='game-title-header'>
					<p className='game-title fw-medium text-start color-palette-1 m-0'>{title}</p>
					<p className='text-xs fw-normal text-start color-palette-2 m-0'>{category}</p>
				</div>
			</th>
			<td>
				<p className='fw-medium color-palette-1 m-0'>{item} Gold</p>
			</td>
			<td>
				<p className='fw-medium color-palette-1 m-0'>{price}</p>
			</td>
			<td>
				<div>
					<span className={classTitle}></span>
					<p className='fw-medium text-start color-palette-1 m-0 position-relative'>{status}</p>
				</div>
			</td>
			<td>
				<Link href={href} className='btn btn-status rounded-pill text-sm'>
					Details
				</Link>
			</td>
		</tr>
	);
}
