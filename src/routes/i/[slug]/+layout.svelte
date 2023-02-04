<script>
	import Back from '$lib/Back.svelte';
	import { fly } from 'svelte/transition';
</script>

<div class="md:flex">
	<Back />

	<div
		in:fly={{ y: 20, duration: 500, delay: 100 }}
		out:fly={{ duration: 100 }}
		class="overflow-y-auto md:w-[100%]"
	>
		<slot />
	</div>
</div>
