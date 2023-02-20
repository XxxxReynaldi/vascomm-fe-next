import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

import SideBar from '../../../components/organisms/SideBar';
import CustomerContent from '../../../components/organisms/CustomerContent';

import { toast } from 'react-toastify';
import { getToken } from '../../../services/auth';

export default function Customer() {
	useEffect(() => {
		document.title = `Test | Halaman Admin`;
		return () => {
			document.title = `Test Stack`;
		};
	});
	const router = useRouter();

	const [token, setToken] = useState('');
	const [expire, setExpire] = useState('');

	const [users, setUsers] = useState([]);

	useEffect(() => {
		refreshToken();
		// getUsers();
	}, []);

	const refreshToken = async () => {
		// const response = await getToken();
		// console.log('response', response);
		// setToken(response.data.accessToken);
		// const decoded = jwtDecode(response.data.accessToken);
		// setName(decoded.name);
		// setExpire(decoded.exp);
		// if (response.error) {
		// 	toast.error(response.message);
		// 	router.push('/sign-in');
		// }
	};

	// const axiosJWT = axios.create();

	// axiosJWT.interceptors.request.use(
	// 	async (config) => {
	// 		const currentDate = new Date();
	// 		if (expire * 1000 < currentDate.getTime()) {
	// 			const response = await getToken();
	// 			config.headers.Authorization = `Bearer ${response.data.accessToken}`;
	// 			setToken(response.data.accessToken);
	// 			const decoded = jwtDecode(response.data.accessToken);
	// 			setName(decoded.name);
	// 			setExpire(decoded.exp);
	// 		}
	// 		return config;
	// 	},
	// 	(error) => {
	// 		return Promise.reject(error);
	// 	}
	// );

	// const getUsers = useCallback(async () => {
	// 	const response = await axiosJWT.get('http://localhost:4000/api/v1/user', {
	// 		headers: {
	// 			Authorization: `Bearer ${token}`,
	// 		},
	// 	});
	// 	setUsers(response.data);
	// }, [axiosJWT, token]);

	return (
		<section className='overview overflow-auto'>
			<SideBar activeMenu='customer' />
			<CustomerContent users={users} />
		</section>
	);
}
