import { callAPI } from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = `api/v1`;

export async function getUser() {
	const url = `${ROOT_API}/${API_VERSION}/auth/token`;

	return callAPI({ url, method: 'GET', data });
}
