import { Form } from 'react-bootstrap';

export default function Input(props) {
	const { label, fieldstate = false, id } = props;

	return (
		<>
			<label htmlFor={id} className='form-label text-lg fw-medium color-palette-1 mb-10'>
				{label}
			</label>
			<Form.Control isInvalid={!!fieldstate[props.name || '']} {...props} />
			<Form.Control.Feedback type='invalid'>{fieldstate[props.name || '']?.msg}</Form.Control.Feedback>
		</>
	);
}
