import cx from 'classnames';
import Link from 'next/link';

export default function ButtonTab(props) {
	const { title, filter, active } = props;
	const btnClass = cx({
		'btn btn-status rounded-pill text-sm me-3': true,
		'btn-active': active,
	});

	return (
		<Link href='#' data-filter={filter} className={btnClass}>
			{title}
		</Link>
	);
}
