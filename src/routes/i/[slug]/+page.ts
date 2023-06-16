import { defaultInhalers } from '$lib/inhalers';

export function load({ params }) {
	const inhaler = defaultInhalers.filter((inhaler) => {
		return params.slug === inhaler['brand name'];
	})[0];
	return { inhaler };
}
