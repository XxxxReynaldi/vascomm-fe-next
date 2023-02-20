import { callAPI } from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = `api/v1`;

export async function setSignUp(data) {
	const url = `${ROOT_API}/${API_VERSION}/auth/signup`;

	return callAPI({ url, method: 'POST', data });
}

export async function setSignIn(data) {
	const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

	return callAPI({ url, method: 'POST', data });
}

export async function setSignOut(data) {
	const url = `${ROOT_API}/${API_VERSION}/auth/signout`;

	return callAPI({ url, method: 'POST', data });
}

export async function getToken() {
	const url = `${ROOT_API}/${API_VERSION}/auth/token`;

	return callAPI({ url, method: 'GET' });
}
