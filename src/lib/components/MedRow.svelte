<script>
	export let medTime = 0;
	export let title = '';

	$: minutes = Math.floor(medTime / 60);
	$: seconds = Math.floor((medTime / 60 - minutes) * 60);
</script>

<div>
	<div class="px-4 pb-2">
		<slot name="title" />
	</div>
	<div class="flex w-full justify-between px-4">
		<span class="bg-green-200 px-4 py-4 text-xl text-neutral-800">{minutes} m {seconds} s</span>
		<slot />
	</div>
</div>
