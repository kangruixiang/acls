<script>
	export let medTime = 0;
	export let title = '';

	$: minutes = Math.floor(medTime / 60);
	$: seconds = Math.round((medTime / 60 - minutes) * 60);
	$: minutes > 0 ? (minutes = minutes) : (minutes = 0);
</script>

<div>
	<div class="px-4 pb-2">
		<slot name="title" />
	</div>
	<div class="flex w-full justify-between px-4">
		<div class="{medTime > 0 ? 'bg-green-200' : 'bg-red-200'} px-4 py-4 text-xl text-neutral-800">
			{#if minutes}{minutes} m{/if}
			{seconds} s
		</div>
		<slot />
	</div>
</div>
