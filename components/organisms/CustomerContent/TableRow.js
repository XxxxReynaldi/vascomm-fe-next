import cx from 'classnames';
import Image from 'next/image';

export default function TableRow(props) {
	const { image, title, role, email, price, status } = props;
	const classTitle = cx({
		'float-start icon-status': true,
		pending: status === 'Pending',
		active: status === 'Active',
		inactive: status === 'Inactive',
	});

	return (
		<tr className='align-middle'>
			<th scope='row'>
				{/* <div className="float-start me-3 mb-lg-0 mb-3">
					<Image
						className="float-start me-3 mb-lg-0 mb-3"
						src={`/img/${image}`}
						width={80}
						height={60}
						alt=""
					/>
				</div> */}
				<picture>
					<img className='float-start me-3 mb-lg-0 mb-3' src={`/img/${image}`} width={80} height={60} alt='' />
				</picture>
				<div className='game-title-header'>
					<p className='game-title fw-medium text-start color-palette-1 m-0'>{title}</p>
				</div>
			</th>
			<td>
				<p className='fw-medium color-palette-1 m-0'>{email}</p>
			</td>
			<td>
				<div>
					{/* <span
						className={`float-start icon-status ${status.toLowerCase()}`}
					></span> */}
					<span className={classTitle}></span>
					<p className='fw-medium text-start color-palette-1 m-0 position-relative'>{status}</p>
				</div>
			</td>
			<td>
				<button className='btn btn-warning text-sm text-white' role='button'>
					<i className='fa-solid fa-pen'></i>
				</button>
			</td>
		</tr>
	);
}
