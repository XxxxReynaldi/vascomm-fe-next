/* eslint-disable import/no-extraneous-dependencies */

import axios from 'axios';
import Cookies from 'js-cookie';

export async function callAPI({ url, method, data, token, serverToken }) {
	let headers = {};
	if (serverToken) {
		headers = {
			Authorization: `Bearer ${serverToken}`,
		};
	} else if (token) {
		const tokenCookies = Cookies.get('token');
		if (tokenCookies) {
			const jwtToken = atob(tokenCookies);
			headers = {
				Authorization: `Bearer ${jwtToken}`,
			};
		}
	}

	const response = await axios({ url, method, data, headers }).catch((err) => err.response);
	console.log('response callAPI', response);
	if (response.status > 300) {
		const res = {
			error: true,
			message: response.data.msg,
			fields: response.data.fields,
			data: response.data,
		};
		return res;
	}

	const { length } = Object.keys(response.data);
	const res = {
		error: false,
		message: 'success',
		data: length > 1 ? response.data : response.data,
	};

	return res;
}
