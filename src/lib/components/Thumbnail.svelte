<script>
	export let inhalers;
</script>

<div
	class="bg-day-main dark:bg-night-main grid h-full auto-rows-min grid-cols-2 gap-x-2 gap-y-4 px-4 md:grid-cols-3"
>
	{#each inhalers as inhaler}
		<slot {inhaler} />
	{/each}
</div>
