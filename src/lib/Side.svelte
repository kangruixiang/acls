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

<div
	class="fixed top-0 left-0 z-10 flex w-full flex-col border-b bg-[#008A94] text-white md:relative md:min-h-screen md:w-64"
>
	<div class="flex items-end overflow-x-auto whitespace-nowrap md:flex-col ">
		<span class="px-2 py-4 font-semibold">Types of Inhalers</span>

		{#each inhalerTypes as inhalerType}
			<div
				class="w-full cursor-pointer bg-[#008A94] px-2 py-4  text-white hover:bg-[#0896a0] active:bg-[#0d9ba5] md:px-6 md:text-right "
				class:selected={current === inhalerType}
				on:click={() => selectByComposition(inhalerType)}
			>
				{inhalerType}
			</div>
		{/each}
	</div>
</div>

<style>
	.selected {
		background-color: #0896a0;
	}
</style>
