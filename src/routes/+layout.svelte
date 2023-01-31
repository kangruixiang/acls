<script>
	import '../app.postcss';
	import Side from '$lib/Side.svelte';
</script>

<div class="flex min-h-screen bg-white flex-col justify-center items-center w-screen">
	<div class=" w-screen flex md:flex-row flex-col rounded-md  min-h-screen relative mb-20">
		<slot />
	</div>
</div>
