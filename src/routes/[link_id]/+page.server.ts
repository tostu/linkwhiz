import pb from '$lib/server/pocketbase';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const record = await pb.collection('link').getOne(params.link_id);

	const destination = record.destination.startsWith('http')
		? record.destination
		: `https://${record.destination}`;

	throw redirect(307, destination);
};
