import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

import Link from 'next/link';
import Input from '../../atoms/Input';
import { setSignUp } from '../../../services/auth';
import Image from 'next/image';

export default function SignUpForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confPassword: '',
		foto: 'default.jpg',
	});
	// const [name, setName] = useState('');
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	// const [confPassword, setConfPassword] = useState('');

	const [image, setImage] = useState('');
	const [imagePreview, setImagePreview] = useState(null);

	const [field, setField] = useState({});

	function handleChange(e) {
		const target = e.target;
		setFormData((prev) => ({
			...prev,
			[target.name]: target.type === 'file' ? target.files : target.value,
		}));

		if (target.type === 'file') {
			const img = target.files[0];
			if (img) {
				setImagePreview(URL.createObjectURL(img));
				setImage(img);
			}
			console.log('img', img);
		}
	}

	const router = useRouter();

	const onSubmit = async (e) => {
		e.preventDefault();
		setField({});

		const myData = new FormData(e.target);

		// const values = [...myData.entries()];
		// console.log('values', values);

		const response = await setSignUp(myData);
		if (response.error) {
			toast.error(response.message);
			setField(response.fields);
		} else {
			toast.success('Sign Up Success');
			// router.push('/sign-up-photo');
		}
	};

	useEffect(() => {
		document.title = `Test | Halaman Pendaftaran`;
		return () => {
			document.title = `Test Stack`;
		};
	});

	return (
		<>
			<h2 className='text-4xl fw-bold color-palette-1 mb-10'>Sign Up</h2>
			<p className='text-lg color-palette-1 m-0'>Daftar dan bergabung dengan kami</p>
			<form onSubmit={onSubmit}>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6'>
							<div className='pt-50'>
								<Input
									label='Nama Lengkap'
									placeholder='Masukkan nama'
									id='name'
									name='name'
									type='text'
									value={formData.name}
									onChange={handleChange}
									// onChange={(e) => setName(e.target.value)}
									fieldstate={field}
									className='form-control rounded-pill text-lg'
									required
								/>
							</div>
							<div className='pt-30'>
								<Input
									label='Email'
									placeholder='Masukkan email'
									id='email'
									name='email'
									type='email'
									value={formData.email}
									onChange={handleChange}
									// onChange={(e) => setEmail(e.target.value)}
									fieldstate={field}
									className='form-control rounded-pill text-lg'
									required
								/>
							</div>
							<div className='pt-30'>
								<Input
									label='Password'
									placeholder='Masukkan password'
									id='password'
									name='password'
									type='password'
									value={formData.password}
									onChange={handleChange}
									// onChange={(e) => setPassword(e.target.value)}
									fieldstate={field}
									className='form-control rounded-pill text-lg'
									required
								/>
							</div>
							<div className='pt-30'>
								<Input
									label='Konfirmasi Password'
									placeholder='konfirmasi password'
									id='confPassword'
									name='confPassword'
									type='password'
									value={formData.confPassword}
									onChange={handleChange}
									// onChange={(e) => setConfPassword(e.target.value)}
									fieldstate={field}
									className='form-control rounded-pill text-lg'
									required
								/>
							</div>
						</div>
						<div className='col-6 my-auto sign-up-photo'>
							<div className='mb-20'>
								<div className='image-upload text-center'>
									<label htmlFor='foto'>
										{imagePreview ? (
											<picture>
												<img src={imagePreview} width={200} height={200} alt='upload' />
											</picture>
										) : (
											<picture>
												<img src='/icon/upload.svg' aria-hidden alt='Upload image' width={200} height={200} />
											</picture>
										)}
									</label>
									<input id='foto' type='file' name='foto' accept='.jpg,.jpeg,.png,.svg' onChange={handleChange} />
								</div>

								<p className='text-center text-lg fw-medium color-palette-1 mb-10 pt-10'>Upload Foto</p>
							</div>
						</div>
					</div>
				</div>

				<div className='button-group d-flex flex-column mx-auto pt-50'>
					<button className='btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16' role='button'>
						Register
					</button>
					<Link
						href='/sign-in'
						className='btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill'
						role='button'
					>
						Sign In
					</Link>
				</div>
			</form>
		</>
	);
}
