<script lang="ts">
	import { goto } from '$app/navigation';
	import { inhalers, defaultInhalers } from '$lib/inhalers';
	let currentLocation: string;
	const inhalerTypes = [
		{
			name: 'SABA',
			url: '/saba'
		},
		{
			name: 'SAMA',
			url: '/sama'
		},
		{
			name: 'SABA-SAMA',
			url: '/sabasama'
		},
		{
			name: 'LABA',
			url: '/laba'
		},
		{
			name: 'LAMA',
			url: '/lama'
		},
		{
			name: 'LABA-LAMA',
			url: '/labalama'
		},
		{
			name: 'ICS',
			url: '/ics'
		},
		{
			name: 'ICS-LABA',
			url: '/icslaba'
		},
		{
			name: 'ICS-LABA-LAMA',
			url: '/icslabalama'
		}
	];

	function changeInhalers(itemType: string) {
		goto('/');
		currentLocation = itemType;
		inhalers.set(defaultInhalers);
		$inhalers = $inhalers.filter((inhaler) => {
			return inhaler['composition'] === itemType;
		});
	}

	function changetoAll() {
		goto('/');
		inhalers.set(defaultInhalers);
		currentLocation = '';
	}
</script>

<div
	class="flex overflow-x-auto whitespace-nowrap border-b border-neutral-200 bg-neutral-100 dark:bg-neutral-800 md:flex-col md:border-b-0 md:py-0"
>
	<div
		class="border-r-1 border-b-2 border-main-700 bg-main-400 px-2 py-3 text-center uppercase tracking-widest dark:text-gray-100 md:py-4"
	>
		Inhalers
	</div>
	<div
		class="mx-1 my-1 cursor-pointer rounded-sm px-2 py-2 hover:bg-main-500 hover:text-gray-100 dark:hover:bg-neutral-500 dark:hover:text-gray-200"
		on:keydown
		on:click={changetoAll}
	>
		All
	</div>
	{#each inhalerTypes as item}
		<div
			class:selected={currentLocation === item.name}
			class="cursor-pointer"
			on:click={() => changeInhalers(item.name)}
			on:keydown
		>
			<div
				class="mx-1 my-1 rounded-sm px-2 py-2 hover:bg-main-500 dark:hover:bg-neutral-500 dark:hover:text-gray-200"
			>
				{item.name}
			</div>
		</div>
	{/each}

	<div id="divider" class="mx-auto my-2 w-[95%] border-b dark:border-neutral-500" />
	<a href="/start">
		<div
			class="mx-1 my-1 rounded-sm px-2 py-2 hover:bg-main-500 dark:hover:bg-neutral-500 dark:hover:text-gray-200"
		>
			Where to Start?
		</div>
	</a>
	<a href="/dosing"
		><div
			class="mx-1 my-1 rounded-sm px-2 py-2 hover:bg-main-500 dark:hover:bg-neutral-500 dark:hover:text-gray-200"
		>
			Steroid Dosing Chart
		</div></a
	>

	<a href="https://projects.krxiang.com"
		><div
			class="mx-1 my-1 rounded-sm px-2 py-2 hover:bg-main-500 dark:hover:bg-neutral-500 dark:hover:text-gray-200"
		>
			Other projects by me
		</div></a
	>
</div>

<style>
	.selected {
		background-clip: content-box;
	}
</style>
