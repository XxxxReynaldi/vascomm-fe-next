import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

import Link from 'next/link';

import { setSignIn } from '../../../services/auth';
import Input from '../../atoms/Input';

export default function SignInForm() {
	const [formData, setFormData] = useState({ email: '', password: '' });
	const [field, setField] = useState({});
	const router = useRouter();

	function handleChange(e) {
		const target = e.target;
		setFormData((prev) => ({
			...prev,
			[target.name]: target.type === 'file' ? target.files : target.value,
		}));
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		setField({});

		const response = await setSignIn(formData);
		if (response.error) {
			toast.error(response.message);
			setField(response.fields);
		} else {
			toast.success('Sign In Success');
			const { accessToken } = response.data;
			const payload = jwtDecode(accessToken);
			const { role } = payload.user;
			switch (role) {
				case 'admin':
					router.push('/admin/customer');
					break;
				case 'customer':
					router.push('/');
					break;
				default:
					break;
			}
			// const tokenBase64 = btoa(accessToken);
			// Cookies.set('accessToken', tokenBase64, { expires: 1 });
		}
	};

	return (
		<>
			<h2 className='text-4xl fw-bold color-palette-1 mb-10'>Sign In</h2>
			<p className='text-lg color-palette-1 m-0'>Masuk untuk melakukan proses top up</p>

			<form onSubmit={onSubmit}>
				<div className='pt-50'>
					<Input
						label='Email Address'
						placeholder='Masukkan email'
						id='email'
						name='email'
						type='email'
						value={formData.email}
						onChange={handleChange}
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
						fieldstate={field}
						className='form-control rounded-pill text-lg'
						required
					/>
				</div>

				<div className='button-group d-flex flex-column mx-auto pt-50'>
					<button className='btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16' role='button'>
						Continue to Sign In
					</button>
					<Link
						href='/sign-up'
						className='btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill'
						role='button'
					>
						Sign Up
					</Link>
				</div>
			</form>
		</>
	);
}
