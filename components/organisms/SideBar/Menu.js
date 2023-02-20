import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

export default function Menu(props) {
	const { icon, title, active, href = '/#' } = props;
	const classTitle = cx({
		item: true,
		'mb-30': true,
		active: active,
	});

	return (
		// <div className="item active mb-30">
		<div className={classTitle}>
			<div className='me-3'>
				<Image src={`/icon/${icon}.svg`} alt='' width={25} height={25} />
			</div>
			<p className='item-title m-0'>
				<Link href={href} className='text-lg text-decoration-none'>
					{title}
				</Link>
			</p>
		</div>
	);
}
