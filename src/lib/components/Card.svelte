<script lang="ts">
	export let inhaler;
</script>

<div class="w-full md:w-1/2">
	<img src={inhaler.image} alt="" class="  aspect-square mx-auto h-96 rounded object-contain" />
</div>
<div class="mx-auto w-full rounded bg-neutral-200 p-10 dark:bg-neutral-800 md:w-1/2">
	<h1>{inhaler['brand name']}</h1>
	<span class="text-lg">Generic: {inhaler.generic}</span> <br />
	<span class="text-lg">Type of Inhaler: {inhaler.composition}</span> <br />
	<span class="text-lg">Instruction: {inhaler.frequency}</span> <br />
	<a class="break-words text-lg hover:underline" href={inhaler.url}>{inhaler.url}</a>
</div>
