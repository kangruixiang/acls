<script>
	import { inhalers } from '$lib/store.js';
	import { fly } from 'svelte/transition';
	import Side from '$lib/Side.svelte';
</script>

<div class="relative flex flex-col md:flex-row">
	<Side />
	<div
		class="z-0 grid h-screen auto-rows-min grid-cols-2 gap-x-4 gap-y-6 overflow-y-auto bg-slate-100 px-10 pt-20 md:w-[100%] md:grid-cols-4 md:gap-y-12 md:py-8"
	>
		{#each $inhalers as inhaler}
			<a
				href="/i/{inhaler['brand name']}"
				in:fly={{ y: 20, duration: 500, delay: 100 }}
				out:fly={{ duration: 100 }}
				class="flex flex-col rounded-md bg-slate-50 hover:shadow"
			>
				<div class="aspect-w-3 aspect-h-2">
					<img src={inhaler['image']} alt="" class="rounded-t-md bg-white object-contain" />
				</div>
				<div class="px-2 py-4 text-center md:text-lg">{inhaler['brand name']}</div>
			</a>
		{/each}
	</div>
</div>
