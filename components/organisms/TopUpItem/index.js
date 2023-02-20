export default function TopUpItem(props) {
	const { type, title, subTitle, category } = props;

	if (type === 'Desktop') {
		return (
			<div className='pb-50 d-md-block d-none'>
				<h2 className='text-4xl fw-bold color-palette-1 text-start mb-10 mt-10'>
					{title}
					<br />
					{subTitle}
				</h2>
				<p className='text-lg color-palette-2 mb-0'>{category}</p>
			</div>
		);
	}

	return (
		<div className='row align-items-center'>
			<div className='col-md-12 col-4'>
				<picture>
					<img src='/img/Thumbnail-3.png' width='280' height='380' className='img-fluid' alt='' />
				</picture>
			</div>
			<div className='col-md-12 col-8 d-md-none d-block'>
				<h2 className='text-xl fw-bold color-palette-1 text-start mb-10'>
					{title}
					<br />
					{subTitle}
				</h2>
				<p className='text-sm color-palette-2 text-start mb-0'>{category}</p>
			</div>
		</div>
	);
}
