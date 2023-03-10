import cx from 'classnames';
import Link from 'next/link';

export default function Menu(props) {
	const { title, active, href = '/' } = props;
	const classTitle = cx({
		'nav-link': true,
		active: active,
	});

	return (
		<li className='nav-item my-auto'>
			<Link href={href} className={classTitle} aria-current='page'>
				{title}
			</Link>
		</li>
	);
}
