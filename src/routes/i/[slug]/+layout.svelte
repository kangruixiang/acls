<script>
	import Back from '$lib/Back.svelte';
</script>

<div class="md:flex">
	<div>
		<Back />
	</div>

	<div class="md:w-2/3">
		<slot />
	</div>
</div>
