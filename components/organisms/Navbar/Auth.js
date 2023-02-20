import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import axios from 'axios';

const API_IMG = process.env.NEXT_PUBLIC_IMG;

export default function Auth() {
	const [isLogin, setIsLogin] = useState(false);
	const [user, setUser] = useState({
		foto: '',
	});
	const router = useRouter();

	if (isLogin) {
		return (
			<li className='nav-item my-auto dropdown d-flex'>
				<div className='vertical-line d-lg-block d-none'></div>
				<div>
					<a
						className='dropdown-toggle ms-lg-40'
						href='#'
						role='button'
						id='dropdownMenuLink'
						data-bs-toggle='dropdown'
						aria-expanded='false'
					>
						<picture>
							<img src={`${API_IMG}/user/${user.foto}`} className='rounded-circle' width='40' height='40' alt='' />
						</picture>
					</a>

					<ul className='dropdown-menu border-0' aria-labelledby='dropdownMenuLink'>
						<li>
							<Link href='/customer/edit-profile' className='dropdown-item text-lg color-palette-2'>
								My Profile
							</Link>
						</li>

						<li>
							<Link href='/sign-in' className='dropdown-item text-lg color-palette-2'>
								Log Out
							</Link>
						</li>
					</ul>
				</div>
			</li>
		);
	}
	return (
		<li className='nav-item my-auto'>
			<Link
				href='/sign-in'
				className='btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill'
				role='button'
			>
				Sign In
			</Link>
		</li>
	);
}
