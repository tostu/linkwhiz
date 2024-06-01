import pb from '$lib/server/pocketbase';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const url = request.url;
		const link = data.get('link');
		const response = await pb.collection('link').create({ destination: link });
		const destination = url + response.id;

		return {
			success: true,
			destination: destination
		};
	}
} satisfies Actions;
