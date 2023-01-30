<script lang="ts">
	import { inhalers } from '$lib/store.js';
	import { defaultInhalers } from '$lib/inhalers';
	import Search from '$lib/Search.svelte';

	let current = 'All';
	let inhalerTypes = [
		'All',
		'SABA',
		'SAMA',
		'SABA-SAMA',
		'LABA',
		'LAMA',
		'LABA-LAMA',
		'ICS',
		'ICS-LABA',
		'ICS-LABA-LAMA'
	];

	function selectByComposition(inhalerComposition: string) {
		inhalers.set(defaultInhalers);
		current = inhalerComposition;

		if (inhalerComposition === 'All') {
			return;
		}

		$inhalers = $inhalers.filter((inhaler) => {
			return inhaler.composition == inhalerComposition;
		});
	}
</script>

<div class="fixed top-0 left-0 flex flex-col  w-full   z-10">
	<div class="flex bg-gray-200 whitespace-nowrap items-end overflow-x-auto">
		<span class="font-semibold px-2 py-4">Types of Inhalers</span>

		{#each inhalerTypes as inhalerType}
			<div
				class="px-2 py-4 cursor-pointer"
				class:selected={current === inhalerType}
				on:click={() => selectByComposition(inhalerType)}
			>
				{inhalerType}
			</div>
		{/each}
	</div>
	<!-- <Search /> -->
</div>

<style>
	.selected {
		background-color: #d0d0d0;
	}
</style>
