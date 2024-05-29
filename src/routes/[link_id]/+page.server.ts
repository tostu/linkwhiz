import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import PocketBase from 'pocketbase';

export const load: PageServerLoad = async ({ params }) => {

	const pb = new PocketBase('http://127.0.0.1:8090');

	const record = await pb.collection('link').getOne(params.link_id);

	const destination = record.destination.startsWith('http')
		? record.destination
		: `https://${record.destination}`;

	throw redirect(307, destination);
};
