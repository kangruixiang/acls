<script lang="ts">
	import { inhalers } from '$lib/store.js';
	import { defaultInhalers } from '$lib/inhalers';
	let searchTerm = '';

	function searchInhaler() {
		if (searchTerm === '') {
			inhalers.set(defaultInhalers);
		}

		$inhalers = $inhalers.filter((inhaler) => {
			return inhaler['brand name'].toLowerCase() == searchTerm.toLowerCase();
		});
	}
</script>

<input
	class="bg-gray-200 py-2 px-4 border-b"
	type="text"
	bind:value={searchTerm}
	on:input={searchInhaler}
/>
