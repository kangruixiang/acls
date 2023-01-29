<script lang="ts">
	import { inhalers } from '$lib/store.js';
	import { defaultInhalers } from '$lib/inhalers';

	let current = 'All';
	let inhalerTypes = [
		'All',
		'SABA',
		'SAMA',
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
	class="fixed top-0 left-0 flex md:flex-col bg-gray-200 rounded-l-md md:w-64 whitespace-nowrap w-full overflow-x-auto items-end z-10"
>
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

<style>
	.selected {
		background-color: #d0d0d0;
	}
</style>
