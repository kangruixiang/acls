<script>
	import { inhalers } from '$lib/store.js';
	import { fade } from 'svelte/transition';
	import Side from '$lib/Side.svelte';
</script>

<div class="flex flex-col md:flex-row">
	<Side />

	<div
		class="px-10 pt-10 pb-10 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 overflow-y-auto mt-12 z-0"
	>
		{#each $inhalers as inhaler}
			<a href="/i/{inhaler['brand name']}" in:fade class="flex flex-col w-full">
				<div class="aspect-w-3 aspect-h-2">
					<img src={inhaler['image']} alt="" class="bg-white object-contain rounded-t-md" />
				</div>
				<div class="bg-gray-200 px-2 py-2 text-center rounded-b-md">{inhaler['brand name']}</div>
			</a>
		{/each}
	</div>
</div>
