<script>
	import '../app.postcss';
	import Side from '$lib/Side.svelte';
</script>

<div class="flex min-h-screen flex-col justify-center items-center bg-[#CCCCCC]">
	<div
		class="bg-gray-100 shadow-lg w-full flex md:flex-row flex-col rounded-md md:py-12 min-h-screen relative "
	>
		<slot />
	</div>
</div>
