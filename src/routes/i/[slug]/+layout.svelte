<script>
	import Back from '$lib/Back.svelte';
</script>

<div class="md:flex">
	<Back />

	<div class="overflow-y-auto md:w-[100%]"><slot /></div>
</div>
