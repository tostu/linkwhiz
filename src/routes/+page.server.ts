import pb from '$lib/pocketbase';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const link = data.get('link');
		const response = await pb.collection('link').create({ destination: link });

		return {
			success: true,
			linkId: response.id
		};
	}
} satisfies Actions;
