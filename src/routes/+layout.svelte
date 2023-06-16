<script>
	import '../app.postcss';
	import Nav from '$lib/components/Nav.svelte';
</script>

<div
	class="sticky left-0 top-0 z-40 border-r border-neutral-200 bg-neutral-100 md:fixed md:h-full md:w-56"
>
	<Nav />
</div>

<div class="mx-auto md:ml-56 md:w-[calc(100%-14rem)]">
	<slot />
</div>
