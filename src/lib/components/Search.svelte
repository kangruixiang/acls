<script lang="ts">
	import MiniSearch from 'minisearch';
	import { inhalers, defaultInhalers } from '$lib/inhalers';
	import { goto } from '$app/navigation';
	let searchTerm = '';
	let result;

	let miniSearch = new MiniSearch({
		idField: 'brand name',
		fields: ['brand name', 'composition', 'generic'],
		storeFields: [
			'brand name',
			'generic',
			'composition',
			'type',
			'frequency',
			'image',
			'url',
			'comment'
		]
	});

	miniSearch.addAll(defaultInhalers);

	function searchInhaler() {
		const baseURL = import.meta.env.BASE_URL;
		const rootURL = baseURL + '/';

		if (window.location.href !== baseURL) {
			console.log(window.location.href, baseURL, rootURL);
		}

		if (!searchTerm) {
			inhalers.set(defaultInhalers);
			return;
		}

		const searchResult = miniSearch.search(searchTerm, { prefix: true });

		$inhalers = searchResult;
	}
</script>

<input
	class="w-full rounded bg-neutral-200 px-4 py-2 dark:bg-neutral-800"
	type="text"
	placeholder="Search..."
	bind:value={searchTerm}
	on:input={searchInhaler}
/>
